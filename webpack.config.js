import { dirname, resolve as pathResolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	entry: './src/js/global.js',
	output: {
		path: pathResolve(__dirname, 'public', 'dist'),
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
