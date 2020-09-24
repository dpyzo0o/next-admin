const fs = require('fs');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const lessToJs = require('less-vars-to-js');
const antdLess = require('./src/next-plugins/antd-less');

const modifyVars = lessToJs(
  fs.readFileSync(path.resolve(__dirname, './src/styles/antd-custom.less'), 'utf8')
);

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
