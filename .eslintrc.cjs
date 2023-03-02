module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'max-len': [
      'error',
      {
        'code': 120,
        'ignoreComments': true,
      },
    ],
    'semi': [
      'error',
      'never',
    ],
  },
};
