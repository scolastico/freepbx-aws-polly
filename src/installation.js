import inquirer from 'inquirer'

export default async () => {
  const aws = await inquirer.prompt([
    {
      type: 'input',
      name: 'accessKeyId',
      message: 'AWS Access Key ID',
    },
    {
      type: 'input',
      name: 'secretAccessKey',
      message: 'AWS Access Key Token',
    },
    {
      type: 'list',
      name: 'region',
      message: 'AWS Region',
      choices: [
        'us-east-1',
        'us-west-1',
        'us-west-2',
        'eu-west-1',
        'eu-west-2',
        'eu-central-1',
        'ap-southeast-1',
        'ap-southeast-2',
        'ap-northeast-1',
        'ap-northeast-2',
        'sa-east-1',
      ],
    },
  ])

  const prefixSuffix = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'changePrefix',
      message: 'Do you want to change the default prefix?',
      default: false,
    },
    {
      type: 'input',
      name: 'prefix',
      message: 'Enter a new prefix:',
      when: (answers) => answers.changePrefix,
      default: '<speak>',
    },
    {
      type: 'confirm',
      name: 'changeSuffix',
      message: 'Do you want to change the default suffix?',
      default: false,
    },
    {
      type: 'input',
      name: 'suffix',
      message: 'Enter a new suffix:',
      when: (answers) => answers.changeSuffix,
      default: '</speak>',
    },
  ])

  if (!prefixSuffix.changePrefix) prefixSuffix.prefix = '<speak>'
  if (!prefixSuffix.changeSuffix) prefixSuffix.suffix = '</speak>'

  const presets = {}
  let defaultLanguage

  while (true) {
    const preset = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a preset short name:',
        validate: (input) => /^[a-z0-9-]+$/.test(input),
      },
      {
        type: 'confirm',
        name: 'setLanguageCode',
        message: 'Do you want to set a language code?',
        default: false,
      },
      {
        type: 'input',
        name: 'languageCode',
        when: (answers) => answers.setLanguageCode,
        message:
          'Enter the language code (see https://docs.aws.amazon.com/polly/latest/dg/voicelist.html):',
      },
      {
        type: 'confirm',
        name: 'setVoiceId',
        message: 'Do you want to set a voice id?',
        default: false,
      },
      {
        type: 'input',
        name: 'voiceId',
        when: (answers) => answers.setVoiceId,
        message:
          'Enter the voice ID (see https://docs.aws.amazon.com/polly/latest/dg/voicelist.html):',
      },
      {
        type: 'confirm',
        name: 'setEngine',
        message: 'Do you want to set a engine?',
        default: false,
      },
      {
        type: 'list',
        name: 'engine',
        when: (answers) => answers.setEngine,
        message: 'Select the voice engine:',
        choices: ['standard', 'neural'],
      },
      {
        type: 'confirm',
        name: 'setPrefix',
        message: 'Do you want to set a prefix?',
        default: false,
      },
      {
        type: 'input',
        name: 'prefix',
        message: 'Enter a new prefix:',
        when: (answers) => answers.setPrefix,
      },
      {
        type: 'confirm',
        name: 'setSuffix',
        message: 'Do you want to set a suffix?',
        default: false,
      },
      {
        type: 'input',
        name: 'suffix',
        message: 'Enter a new suffix:',
        when: (answers) => answers.setSuffix,
      },
    ])

    presets[preset.name] = {
      languageCode: preset.languageCode,
      voiceId: preset.voiceId,
      engine: preset.engine,
    }

    const confirmDefault = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'isDefault',
        message: 'Do you want to set this as the default preset?',
        default: false,
      },
    ])

    if (confirmDefault.isDefault) {
      defaultLanguage = preset.name
    }

    const confirmContinue = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'continue',
        message: 'Do you want to add another preset?',
        default: false,
      },
    ])

    if (!confirmContinue.continue) {
      break
    }
  }

  const replacements = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmReplacements',
      message: 'Do you want to set any replacements?',
      default: false,
    },
    {
      type: 'editor',
      name: 'replacements',
      message:
        'Enter the key-value pairs for replacements (one per line, in the format key=value):',
      when: (answers) => answers.confirmReplacements,
    },
  ])

  const config = {
    aws,
    prefix: prefixSuffix.prefix,
    suffix: prefixSuffix.suffix,
    defaultPreset: defaultLanguage,
    presets,
    replace: {},
  }

  if (replacements.confirmReplacements) {
    const lines = replacements.replacements.split('\n')
    for (const line of lines) {
      const [key, value] = line.split('=')
      if (key && value) {
        config.replace[key] = value
      }
    }
  }

  return config
}
