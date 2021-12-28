const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less'],
    alias: {
      '@/pages': path.resolve(__dirname, './../src/pages/'),
      '@/packages': path.resolve(__dirname, './../src/packages/'),
      '@/utils': path.resolve(__dirname, './../src/utils/'),
      '@/stores': path.resolve(__dirname, './../src/stores/'),
    }
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
