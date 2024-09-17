const { DefinePlugin } = require("webpack");

console.log(process.env.server);

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
  plugins: [
    new DefinePlugin({
      'process.env.server': JSON.stringify(process.env.server || '127.0.0.1:3000')
    })
  ]
}