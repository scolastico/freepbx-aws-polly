import path from 'path'
import {URL} from 'url'
const __dirname = new URL('.', import.meta.url).pathname

const exports = {
  mode: 'production',
  entry: './src/main.js',
  target: 'node',
  resolve: {
    extensions: ['.js', '.mjs', '.cjs', '.json', '.ts'],
  },
  externalsPresets: {node: true},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.cjs',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
}

export default exports
