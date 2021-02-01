const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const antdLess = require('./src/next-plugins/antd-less');
const modifyVars = require('./src/styles/antd-custom');

module.exports = withPlugins([
  [bundleAnalyzer],
  [
    antdLess,
    {
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars,
      },
    },
  ],
]);
