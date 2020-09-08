const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let publicPath = '/static/';

var config = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  stats: {
    publicPath: true
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    // publicPath: '/static/',
    // injectHot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    // watchContentBase: true,
    proxy: {
      '/api': 'http://10.49.46.11:8001'
    },
    port: 9000,
    host: '0.0.0.0',
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|eot|svg|woff2|woff|ttf|gif|mp3|jpe?g?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'files/[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
      assets: path.resolve(__dirname, 'src/assets'),
      camera_redux: path.resolve(__dirname, 'src/camera_redux'),
      client: path.resolve(__dirname, 'src/client'),
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      store: path.resolve(__dirname, 'src/store'),
      stores: path.resolve(__dirname, 'src/stores'),
      themes: path.resolve(__dirname, 'src/themes'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
      // filename: path.join(__dirname, './public/index.html')
    })
  ]
};

module.exports = config;
