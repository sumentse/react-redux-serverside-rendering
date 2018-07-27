const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

	//tell webpack of the root file
	entry: './src/client/client.js',

	//where it should be output file generate
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}


};

module.exports = merge(baseConfig, config);