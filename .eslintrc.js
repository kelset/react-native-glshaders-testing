module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended', 'plugin:react/recommended'],
  plugins: ['flowtype', 'react', 'react-native'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    'comma-dangle': 0,
    'no-use-before-define': 0,
    'quote-props': 1,
    'react/jsx-no-bind': 1,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 1,
    'padded-blocks': 0,
    'no-shadow': 1,
    'no-return-assign': 1,
    'no-case-declarations': 1,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 1,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/no-unresolved': 1,
    'no-param-reassign': 0,
    'consistent-return': 1,
    'react/no-multi-comp': 1,
    'no-confusing-arrow': 0,
    'react/jsx-filename-extension': 0,
    'no-console': 0
  }
};
