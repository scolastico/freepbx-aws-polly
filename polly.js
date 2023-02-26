import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';
import { readFile, writeFile, rm } from 'fs/promises';
import { spawn } from 'child_process';
import minimist from 'minimist';

const loadConfig = async () => {
  const configText = await readFile('./config.json', 'utf8');
  return JSON.parse(configText);
};

const synthesizeSpeech = async ({ text, mp3, wav, voiceId, languageCode, engine, awsConfig }) => {
  console.log('The synthesizeSpeech function was called.');
  console.log(`text: ${text}, mp3: ${mp3}, wav: ${wav}, voiceId: ${voiceId}, languageCode: ${languageCode}, engine: ${engine}`);
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

  const response = await polly.send(command);
  await writeFile(mp3, response.AudioStream);

  const output = spawn('lame', ['--decode', mp3, '-b', '8000', wav]);

  output.on('close', async () => {
    await rm(mp3);
    console.log('The mp3 file was deleted.');
  });
};

const main = async () => {
  const config = await loadConfig();
  const awsConfig = {
    region: config.aws.region,
    credentials: {
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
      sessionToken: config.aws.sessionToken,
    }
  };
  console.log('The config file was loaded.');

  const args = minimist(process.argv.slice(2), {
    string: ['mp3', 'text', 'wav'],
    alias: {
      mp3: 'o',
      text: 't',
      wav: 'w',
    },
  });

  let language = config.defaultLanguage;
  if (args.text.startsWith('!')) for (const lang of Object.keys(config.presets)) {
    if (args.text.startsWith(`!${lang}`)) {
      language = lang;
      break;
    }
  }

  const preset = config.presets[language];

  const text = config.prefix + (args.text.startsWith('!') ? args.text.slice(language.length + 1) : args.text) + config.suffix;
  const mp3 = args.mp3;
  const wav = args.wav;

  if (!text || !mp3 || !wav) throw new Error('Missing arguments.');
  console.log('The arguments were parsed.');

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
