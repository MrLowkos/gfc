module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {

  },
  settings: {
    parser: '@typescript-eslint/parser',
    react: {
      version: 'detect'
    },
    'import/extensions': ['.js','.jsx','.ts','.tsx'],
    'import/resolver': {
      typescript: {},
    }
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react'
  ],
};
