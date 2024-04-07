const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = env => {
	return {
		entry: {
			App: './src/index.js',
			main: './src/main.js'
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].[contenthash].js', // '[name].[contenthash].js' put this if you want to get hashed files to cache bust
			sourceMapFilename: "[name].[contenthash].js.map"
		},
		devtool:"source-map",
		module: {
			rules: [
				{
					test: /\.m?js$/,
					enforce: 'pre',
					use: ['source-map-loader'],
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						{
							loader: "css-loader",
							options: {
								modules: true,
							},
						},
						'sass-loader',
						'postcss-loader'
					]
				}
			]
		},
		resolve: {
			modules: [
				'node_modules'
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				inject: true,
				hash: true,
				template: './src/index.html',
				children: false,
				filename: '../../index.html'
			}),
			new CleanWebpackPlugin(),
			new webpack.ProvidePlugin({
				'React': 'react'
			})
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 0
			},
			usedExports: true,
			sideEffects: true
		}
	};
};
