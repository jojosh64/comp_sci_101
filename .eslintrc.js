module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['prettier', 'strongloop'],
  rules: {
    'array-callback-return': 1,
    'arrow-body-style': 1,
    'comma-dangle': 0,
    'no-duplicate-imports': 'error',
    'no-return-assign': 1,
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
      },
    ],
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-destructuring': 'error',
    'prefer-rest-params': 1,
    'prefer-template': 'error',
    'sort-imports': 1,
    'space-before-function-paren': 0,
    'max-len': ['error', { code: 120 }],
    indent: 0,
  },
  env: {
    jest: true,
  },
  globals: {
    NODE_ENV: true,
    Promise: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  }
};
