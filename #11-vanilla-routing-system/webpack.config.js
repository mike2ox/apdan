const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = {
	mode: "development",
	entry: {
		router: path.resolve(__dirname, './src/router.js'),
		app: path.resolve(__dirname, './src/index.js')
	},
	resolve: {
		extensions: ['.js', '.json', '.wasm'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, './dist/index.html'),
			template: path.resolve(__dirname, './public/index.html')
		}),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		})
	],

}
