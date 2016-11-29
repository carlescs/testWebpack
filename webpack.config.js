var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");

module.exports = {  
  context: __dirname + '/src',
    entry: {
      index: './client/index',
      vendor:['angular']
    },
    output: {
        path: __dirname + '/dist/',
        publicPath: '/',
        filename: '[name].bundle.js'
    },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  resolveLoader: {
        modulesDirectories: ['node_modules']
    },
  // Add minification
  plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './client/index.html',
        chunks: ['index','vendor']
      }),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  }
}