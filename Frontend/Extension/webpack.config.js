const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');
const argv = require('webpack-nano/argv');
const { merge } = require('webpack-merge');

module.exports = () => {
  const { env } = argv;

  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./build-utils/webpack.${env}.js`);
  const mergedConfig = merge(commonConfig, envConfig);

  return mergedConfig;
};
