module.exports = options => {
	return {
		entry: './src/js/index.js',
		output: {
			filename: './src/js/bundle.js',
		},
		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: true,
							},
						},
					],
					
				},
			],
		},
	}
}