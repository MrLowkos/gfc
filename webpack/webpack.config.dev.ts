import { Configuration } from 'webpack';
import { smart as wpSmartMerge } from 'webpack-merge';
import { WebpackPluginServe } from 'webpack-plugin-serve';

import { webpackBaseConfig, outputPath } from './webpack.config.base';

const devServer = new WebpackPluginServe({
  client: {
    retry: true,
  },
  host: 'localhost',
  port: 8080,
  historyFallback: true,
  static: [outputPath],
  hmr: true,
  liveReload: true,
  open: true,
  progress: true,
});

export const webpackDevConfig: Configuration = wpSmartMerge(webpackBaseConfig, {
  name: 'dev',
  entry: {
    app: ['webpack-plugin-serve/client'],
  },
  devtool: 'eval-source-map',
  plugins: [devServer],
});
