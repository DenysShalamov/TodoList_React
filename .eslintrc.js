module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'class-methods-use-this': [0, { exceptMethods: ['render'] }],
    'no-alert': 0,
    'no-console': 0,
    'no-constant-condition': 0,
    'no-shadow': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'global-require': 0,
    'import/extensions': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
