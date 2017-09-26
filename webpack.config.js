var path = require('path')
var webpack = require('webpack')
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
	    {
		    test: /\.ts$/,
		    loader: 'ts-loader',
		    options: {
			    transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
		    }
	    }
    ]
  },
	devServer: {
    historyApiFallback: true,
    noInfo: true
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin()
	],
  performance: {
    hints: false
  },
	context: __dirname,
	devtool: '#eval-source-map',
	resolve: {
		extensions: ['.ts', '.js']
	}
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
