const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/platforms/web/entry-runtime-with-compiler.ts',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'diend.min.js',
    libraryTarget: 'umd',
    library: 'Diend',
    libraryExport: 'default',
  },
  resolve: {
    extensions: [ '.ts' ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
