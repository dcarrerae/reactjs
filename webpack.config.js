var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
	watch: true, // simula hacer webpack --watch, cuando hago webpack
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false
			}
		}),
		new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
			}
		}),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development,
			// ./public directory is being served
			host: 'localhost',
			port: 3000,
			server: { baseDir: [''] } // '' indica el directorio raiz, dentro de las comillas ingresar carpeta
		})
	]
}