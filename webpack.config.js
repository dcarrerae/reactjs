var webpack = require('webpack');

module.exports = {

	entry: './js/component.js',

	output: {
		path            : __dirname + '/dist',
		filename        : 'bundle.js'
	},
	module: {
	loaders:
		[
			{
				test    : /\.js?$/,
				loader  : 'babel-loader',
				exclude : /node_modules/,
				query   : {
				presets : ['react', 'es2015', 'stage-0'],
				plugins : ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false
			}
		})
	]
}