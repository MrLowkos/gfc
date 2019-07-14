import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin') as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wpArgv = require('webpack-nano/argv') as any;

const resolvePath = (path: string): string => resolve(__dirname, path);

export const outputPath = resolvePath('../dist');

export const npmTarget = process.env.npm_lifecycle_event;

export const isProduction = process.env.NODE_ENV === 'production';

export const webpackBaseConfig: Configuration = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: [resolvePath('../src/app/index.tsx')],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  output: {
    pathinfo: true,
    path: outputPath,
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        sideEffects: true,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          forceIsolatedModules: true,
          reportFiles: ['src/**/*.{ts,tsx}', 'tests/**/*.{ts,tsx}'],
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        sideEffects: true,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath('../src/app/index.html'),
    }),
  ],
  optimization: {
    usedExports: true,
  },
  watch: !isProduction,
};
