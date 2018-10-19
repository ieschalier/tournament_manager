module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: [
    'flowtype',
  ],
  env: {
    browser: true,
  },
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
}
