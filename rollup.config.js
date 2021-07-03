import resolve from '@rollup/plugin-node-resolve';
import injectProcessEnv from 'rollup-plugin-inject-process-env'

export default {
	input: 'build-tools.mjs',
	output: {
		file: 'build-rollup/bundle.js',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		resolve(),
        injectProcessEnv({
            NODE_ENV: 'production'
        })
	]
};