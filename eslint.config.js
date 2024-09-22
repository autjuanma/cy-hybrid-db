module.exports = {
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    languageOptions: {
      globals: {
        node: true,
        browser: true,
      },
    },
    rules: {
      'no-console': 'off',
    },
  };