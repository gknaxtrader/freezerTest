var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	target: 'web',
	cache: true,
	debug: true,
	devtool: 'eval',
	//entry: ['babel-polyfill', './src/style/main_src.css', './src/js/bootstrap.jsx'],
	entry: ['./src/js/bootstrap.jsx'],
	output: {
		path: './assets/js',
		filename: 'bundle.min.js',
		pathinfo: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	noParse: [/utils/],
	cssnext: {
		browsers: 'last 1 version, > 5%'
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				exclude: [/node_modules/, /assets/, /vendor/],
				test: /\.jsx?$/,
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=15000&mimetype=image/png&name=../img/[name].[ext]'
			},
			{
				test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
				loader: 'url-loader?limit=10000&name=../fonts/[name].[ext]'
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader?name=../img/[name].[ext]'
			}
		]
	},
	/*
	plugins: [
		new ExtractTextPlugin('../css/main.css', {allChunks: true})
	],
	*/

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}
};
