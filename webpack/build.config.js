const mainConfig = require('./main.config.js')

module.exports = {
  ...mainConfig,
  devtool: 'source-map',
  mode: 'production',
}
