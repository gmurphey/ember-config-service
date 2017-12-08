module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  plugins: [
    'ember'
  ],
  rules: {
    'ember/use-ember-get-and-set': 'error'
  }
};
