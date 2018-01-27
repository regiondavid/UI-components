var PATH = require('path');
var ROOT_PATH = PATH.resolve(__dirname);
var APP_PATH =  PATH.resolve(ROOT_PATH,'docs/js');
var BUILD_PATH = PATH.resolve(ROOT_PATH,'dist');

module.exports = {
	entry: "./docs/js/app.js",
	output: {
		path: BUILD_PATH,
		filename: "boundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				include: APP_PATH,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				loaders: ["style","css"]
			}
		]
	}
}