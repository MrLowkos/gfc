import { Configuration } from 'webpack';

import { webpackDevConfig } from './webpack/webpack.config.dev';
import { webpackProdConfig } from './webpack/webpack.config.prod';

const config: Configuration[] = [webpackDevConfig, webpackProdConfig];

export default config;
