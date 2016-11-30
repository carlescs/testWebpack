var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require("path");

module.exports = {
  context: __dirname + '/src',
  entry: {
    index: './client/index/index',
    second: './client/second/second',
    vendor: ['angular','angular-ui-router', 'bootstrap','bootstrap/dist/css/bootstrap.css']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name]/[name].bundle.js'
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
      template: './client/index/index.html',
      filename: './index/index.html',
      chunks: ['index', 'vendor']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './client/index/test.html',
      filename: './index/test.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './client/second/index.html',
      filename: './second/index.html',
      chunks: ['second', 'vendor']
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.tsx?$/, loader: 'ts' }
    ]
  }
}