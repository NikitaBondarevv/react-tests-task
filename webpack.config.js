const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    main: './app'
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env', 'react'] }
        }
      }
    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),

    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component']
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9090,
    hot: true
  }
};
