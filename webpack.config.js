const path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	entry: './index.js',
	output: {
		path: __dirname + '/src',
		filename: 'bundle.js'
	},
	mode: "development",
	module: {
		rules: [
	    {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
			},
			{
	      test: /\.css$/,
	      use: [
	        { loader: 'style-loader' },
	        {
	          loader: 'css-loader',
	          options: {
	            modules: true
	          }
	        }
				]
			}
		]
	}

};
