const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const webpack = require('webpack');

module.exports = composePlugins(
  withNx(),
  withReact({
    // Config options for React
  }),
  (config) => {
    config.ignoreWarnings = [/Failed to parse source map/];

    // Adding fallbacks for Node.js core modules
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve.fallback || {}),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
      },
    };

    config.plugins = [
      ...(config.plugins || []),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ];

    return config;
  }
);
