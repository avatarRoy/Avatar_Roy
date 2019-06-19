const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.(jpge|gif|jpg|png)$/, loader:"file-loader"}
		]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};
