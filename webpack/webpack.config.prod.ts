import { Configuration } from 'webpack';
import { smart as wpSmartMerge } from 'webpack-merge';

import { webpackBaseConfig } from './webpack.config.base';

export const webpackProdConfig: Configuration = wpSmartMerge(webpackBaseConfig, {
  name: 'prod',
  performance: {
    hints: 'warning',
  },
  devtool: 'nosources-source-map',
});
