module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  plugins: [
    'ember'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/alias-model-in-controller': 'off',
    'ember/named-functions-in-promises': 'off',
    'ember/no-old-shims': 'error'
  }
};
