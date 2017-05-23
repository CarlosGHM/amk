const webpack = require('webpack');

const config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    publicPath: '/amk/dist/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        // loader: 'ng-annotate!babel-loader',
        exclude: '/node_modules/',
        use: [
          {
            loader: 'ng-annotate-loader',
            options: {
              es6: true
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          },
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin);
  config.devtool = 'source-map';
}

module.exports = config;