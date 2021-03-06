module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': ['off'],
    'import/extensions': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'space-before-function-paren': ['error'],
    'no-console': ['off'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^state'] }],
    'no-return-await': ['off'],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['error', { code: 115 }],
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.ts', '.json', '.js', '.vue'],
      },
    },
  },
};
