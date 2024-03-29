import {PollyClient, SynthesizeSpeechCommand} from '@aws-sdk/client-polly'
import {createLogger, transports, format} from 'winston'
import {readFile, writeFile, rm, mkdir} from 'fs/promises'
import {existsSync} from 'fs'
import {spawn} from 'child_process'
import path from 'path'
import minimist from 'minimist'
import createConfig from './installation.js'
import defaultConfig from './defaultConfig.json'

let logger = {
  info: console.log,
  error: console.error,
  warn: console.warn,
  debug: console.debug,
}

const loadConfig = async (scriptDir) => {
  const configPath = path.join(scriptDir, 'config.json')
  if (!existsSync(configPath)) {
    await writeFile(configPath, JSON.stringify(defaultConfig, null, 2))
    throw new Error('The config file was created. Please fill it out and restart the program.')
  }
  return JSON.parse(await readFile(configPath, 'utf8'))
}

const synthesizeSpeech = async ({text, mp3, wav, voiceId, languageCode, engine, awsConfig}) => {
  logger.info('Starting speech synthesis...')
  logger.info(JSON.stringify(
      {text, mp3, wav, voiceId, languageCode, engine, region: awsConfig.region},
  ).replaceAll('"', '\''))
  const polly = new PollyClient(awsConfig)

  const command = new SynthesizeSpeechCommand({
    Text: text,
    TextType: 'ssml',
    OutputFormat: 'mp3',
    SampleRate: '8000',
    VoiceId: voiceId,
    Engine: engine,
    LanguageCode: languageCode,
  })

  logger.info('Sending command to AWS Polly...')
  const response = await polly.send(command)
  logger.info('Saving mp3 file...')
  await writeFile(mp3, response.AudioStream)

  logger.info('Converting mp3 to wav...')
  const output = spawn('lame', ['--decode', mp3, '-b', '8000', wav])

  output.on('close', async () => {
    logger.info('Deleting mp3 file...')
    await rm(mp3)
    logger.info('Done.')
  })
}

const main = async () => {
  logger.info('Starting program...')
  const output = await new Promise((resolve) => {
    const subprocess = spawn('dirname', [process.argv[1]])
    subprocess.stdout.on('data', (output) => {
      const stdout = output.toString().trim()
      if (stdout.includes('/snapshot/')) {
        resolve({isSnapshot: true})
      } else {
        resolve({isSnapshot: false, scriptDir: stdout})
      }
    })
    subprocess.on('error', (error) => resolve({isSnapshot: true}))
  })

  let scriptDir
  if (output.isSnapshot) {
    scriptDir = path.dirname(process.argv[0])
  } else {
    scriptDir = output.scriptDir
  }

  if (!existsSync(path.join(scriptDir, 'logs'))) {
    await mkdir(path.join(scriptDir, 'logs'))
  }

  logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.printf((info) =>
          `${info.timestamp} ${info.level}: ${info.message}`,
        ),
    ),
    transports: [
      new transports.File({
        filename: path.join(scriptDir, 'logs', 'combined.log'),
        maxsize: 1000000,
        maxFiles: 10,
        tailable: true,
      }),
      new transports.Console(),
    ],
  })

  logger.info('\'I am now ready!\'')

  logger.info('Parsing arguments...')
  const args = minimist(process.argv.slice(2), {
    string: ['mp3', 'text', 'wav'],
    boolean: ['install'],
    alias: {
      mp3: 'o',
      text: 't',
      wav: 'w',
      install: 'i',
    },
  })

  if (args.install) {
    logger.info('Starting installation...')
    const config = await createConfig()
    await writeFile('./config.json', JSON.stringify(config, null, 2))
    logger.info('Done.')
    return
  }

  if (!args.text || !args.mp3 || !args.wav) throw new Error('Missing arguments.')

  logger.info('Loading config...')
  const config = await loadConfig(scriptDir)
  const awsConfig = {
    region: config.aws.region,
    credentials: {
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
      sessionToken: config.aws.sessionToken,
    },
  }

  logger.info('Parsing presets...')
  let language = config.defaultPreset || config.defaultLanguage
  if (!language) throw new Error('Missing defaultPreset in config.json')
  let preset = config.presets[language]
  let text = args.text
  if (text.startsWith('!')) {
    const languages = text.split(' ')[0].slice(1).split(',')
    language = languages.join(',')
    text = text.split(' ').slice(1).join(' ')
    preset = languages.map((language) => config.presets[language])
    preset = preset.reduce((a, b) => ({...a, ...b}), {})
  }

  logger.info(`Using language/preset ${language}...`)

  if (!preset.voiceId) throw new Error(`No voiceId for preset ${language}.`)
  if (!preset.languageCode) throw new Error(`No languageCode for preset ${language}.`)
  if (!preset.engine) throw new Error(`No engine for preset ${language}.`)
  if (!preset.prefix) preset.prefix = ''
  if (!preset.suffix) preset.suffix = ''

  const mp3 = args.mp3.endsWith('.mp3') ? args.mp3 : (args.mp3 + '.mp3')
  const wav = args.wav.endsWith('.wav') ? args.wav : (args.wav + '.wav')

  for (const key of Object.keys(config.replace)) {
    text = text.replaceAll(key, config.replace[key])
  }

  text = config.prefix + preset.prefix + text + preset.suffix + config.suffix

  await synthesizeSpeech({
    text,
    mp3,
    wav,
    voiceId: preset.voiceId,
    languageCode: preset.languageCode,
    engine: preset.engine,
    awsConfig,
  })
}

main().then()
