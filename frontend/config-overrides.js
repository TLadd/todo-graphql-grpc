const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint
} = require("react-app-rewire-typescript-babel-preset");

module.exports = {
  webpack: function(config, env) {
    return rewireTypescript(config);
  },
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
