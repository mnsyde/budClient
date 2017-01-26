const path = require('path');

const config = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["react", "es2015"]
				},
			}
		]
	},
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		publicPath: '/',
		port: 9000
	}
}

module.exports = config;