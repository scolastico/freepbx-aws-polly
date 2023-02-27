import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';
import { readFile, writeFile, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import minimist from 'minimist';
import createConfig from './installation.js';
import defaultConfig from './defaultConfig.json';

const loadConfig = async () => {
  const output = await new Promise((resolve) => {
    const subprocess = spawn('dirname', [process.argv[1]]);
    subprocess.stdout.on('data', (output) => {
      const stdout = output.toString().trim();
      if (stdout.includes('/snapshot/')) {
        resolve({ isSnapshot: true });
      } else {
        resolve({ isSnapshot: false, scriptDir: stdout });
      }
    });
    subprocess.on('error', (error) => resolve({ isSnapshot: true }));
  });

  let scriptDir;
  if (output.isSnapshot) {
    scriptDir = path.dirname(process.argv[0]);
  } else {
    scriptDir = output.scriptDir;
  }

  const configPath = path.join(scriptDir, 'config.json')
  if (!existsSync(configPath)) {
    await writeFile(configPath, JSON.stringify(defaultConfig, null, 2));
    throw new Error('The config file was created. Please fill it out and restart the program.');
  }
  return JSON.parse(await readFile(configPath, 'utf8'));
};

const synthesizeSpeech = async ({ text, mp3, wav, voiceId, languageCode, engine, awsConfig }) => {
  console.log('Starting speech synthesis...');
  console.log(JSON.stringify({ text, mp3, wav, voiceId, languageCode, engine, region: awsConfig.region }).replaceAll('"', "'"));
  const polly = new PollyClient(awsConfig);

  const command = new SynthesizeSpeechCommand({
    Text: text,
    TextType: 'ssml',
    OutputFormat: 'mp3',
    SampleRate: '8000',
    VoiceId: voiceId,
    Engine: engine,
    LanguageCode: languageCode,
  });

  console.log('Sending command to AWS Polly...');
  const response = await polly.send(command);
  console.log('Saving mp3 file...')
  await writeFile(mp3, response.AudioStream);

  console.log('Converting mp3 to wav...');
  const output = spawn('lame', ['--decode', mp3, '-b', '8000', wav]);

  output.on('close', async () => {
    console.log('Deleting mp3 file...');
    await rm(mp3);
    console.log('Done.');
  });
};

const main = async () => {

  console.log('Parsing arguments...');
  const args = minimist(process.argv.slice(2), {
    string: ['mp3', 'text', 'wav'],
    boolean: ['install'],
    alias: {
      mp3: 'o',
      text: 't',
      wav: 'w',
      install: 'i',
    },
  });

  if (args.install) {
    console.log('Starting installation...');
    const config = await createConfig();
    await writeFile('./config.json', JSON.stringify(config, null, 2));
    console.log('Done.');
    return;
  }

  if (!args.text || !args.mp3 || !args.wav) throw new Error('Missing arguments.');

  console.log('Loading config...');
  const config = await loadConfig();
  const awsConfig = {
    region: config.aws.region,
    credentials: {
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
      sessionToken: config.aws.sessionToken,
    }
  };

  console.log('Parsing language...');
  let language = config.defaultLanguage;
  if (args.text.startsWith('!')) for (const lang of Object.keys(config.presets)) {
    if (args.text.startsWith(`!${lang}`)) {
      language = lang;
      break;
    }
  }

  console.log(`Using language/preset ${language}...`);
  const preset = config.presets[language];

  let text = args.text.startsWith('!') ? args.text.slice(language.length + 1) : args.text
  const mp3 = args.mp3.endsWith('.mp3') ? args.mp3 : (args.mp3 + '.mp3');
  const wav = args.wav.endsWith('.wav') ? args.wav : (args.wav + '.wav');

  for (const key of Object.keys(config.replace)) {
    text = text.replaceAll(key, config.replace[key]);
  }

  await synthesizeSpeech({
    text,
    mp3,
    wav,
    voiceId: preset.voiceId,
    languageCode: preset.languageCode,
    engine: preset.engine,
    awsConfig,
  });
};

main().then();
