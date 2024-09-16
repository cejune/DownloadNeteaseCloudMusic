
module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: "production",
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
}