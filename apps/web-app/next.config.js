const path = require('path');

module.exports = {
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
