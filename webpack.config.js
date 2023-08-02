import path from 'path';

export default {
	entry: './src/js/global.js',
	output: {
		path: path.resolve(process.cwd(), 'public', 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	mode: 'production',
};
