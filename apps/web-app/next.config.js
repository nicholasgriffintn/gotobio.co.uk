const path = require('path');
const webpack = require('webpack');

const { parsed: myEnv } = require('dotenv').config({
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
  publicExcludes: ['!noprecache/**/*', '!img/**/*'],
  reactStrictMode: true,
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  pwa: {
    dest: 'public',
    register:
      process.env.NODE_ENV === 'production' || process.env.ENV === 'production',
    skipWaiting: true,
  },
  env: {
    APP_NAME: 'Go To Bio',
  },
};
