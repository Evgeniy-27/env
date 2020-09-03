const { merge } = require();
const TerserPlugin = require();
const OptimizeCSSAssetsPlugin = require();
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
