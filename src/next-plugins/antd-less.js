const cloneDeep = require('lodash.clonedeep');

/**
 * Reference: https://github.com/vercel/next.js/blob/canary/examples/with-ant-design-less/next.config.js
 */
function handleServer(config) {
  const antStyles = /antd\/.*?\/style.*?/;
  const origExternals = [...config.externals];
  config.externals = [
    (context, request, callback) => {
      if (request.match(antStyles)) {
        return callback();
      }
      if (typeof origExternals[0] === 'function') {
        origExternals[0](context, request, callback);
      } else {
        callback();
      }
    },
    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
  ];

  config.module.rules.unshift({
    test: antStyles,
    use: 'null-loader',
  });
}

/**
 * Modified from https://github.com/SolidZORO/next-plugin-antd-less
 */
module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      const { rules } = config.module;
      const { isServer } = options;
      const { lessLoaderOptions = {} } = nextConfig;

      const sassRegex = /\.module\.(scss|sass)$/;
      const sassRuleIndex = rules[1].oneOf.findIndex(
        x => x.test.toString() === sassRegex.toString()
      );
      const sassRule = rules[1].oneOf[sassRuleIndex];

      // copy rules
      const lessRule = cloneDeep(sassRule);
      lessRule.test = /\.less$/;

      // enable less-loader to process less files from node_modules
      delete lessRule.issuer;

      // replace sass-loader with less-loader
      lessRule.use.splice(
        lessRule.use.findIndex(x => x.loader.includes('sass-loader')),
        1,
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            lessOptions: lessLoaderOptions,
          },
        }
      );

      // change css-loader configs
      const cssLoaderIndex = lessRule.use.findIndex(x => x.loader.includes('css-loader'));
      const cssLoader = lessRule.use[cssLoaderIndex];
      cssLoader.options.modules = {
        ...cssLoader.options.modules,
        mode: 'local',
        auto: true,
      };

      // insert less rules into webpack module rules
      rules[1].oneOf.splice(sassRuleIndex, 0, lessRule);
      config.module.rules = rules;

      if (isServer) {
        handleServer(config);
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
