module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'eqeqeq': 'error',
    'no-console': 'off',
    'spaced-comment': 'warn',
    'vue/no-v-html': 'off',
  },
}
