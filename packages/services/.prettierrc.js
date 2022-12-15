const baseConfig = require('../../.prettierrc.js');

module.exports = {
  ...baseConfig,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
};
