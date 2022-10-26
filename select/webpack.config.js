const path = require('path');

module.exports = {
  // add README.md to te package as well

  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
        include: /node_modules/,
        exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
