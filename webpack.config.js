var webpack = require("webpack");
var path = require("path");
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
    entry: "./dev/app.js",
	output: {
        path: __dirname + '/public/js',
        publicPath: "./public/",
        filename: "app.js",
        sourceMapFilename: "app.js.map"
	},
	module: {
		loaders: [
            {
                test : /\.jsx/,
                // include : APP_DIR,
                loader : 'babel'
            },
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.vue/, loader: "vue-loader"},
			{test: /\.css$/, loader: "style!css"},
			{test: /\.html$/, loader: "html-loader"},
			{test: /\.jpg$/, loader: "file-loader"},
			{test: /\.png$/, loader: "url-loader?mimetype=image/png"},
			{test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf$/, loader: "file-loader"},
			{test: /\.eot$/, loader: "file-loader"},
			{test: /\.svg$/, loader: "file-loader"}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		/*	new webpackUglifyJsPlugin({
		 cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
		 debug: true,
		 minimize: true,
		 sourceMap: true,
		 output: {
		 comments: false
		 },
		 compressor: {
		 warnings: false
		 }
		 }),*/
		new LiveReloadPlugin()
	],
	devtool: "source-map",
	devServer: {
		inline: true,
		port: 3000
	}

};