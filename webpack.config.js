const path = require('path');

const mode = process.env.NODE_ENV ?? 'development';

module.exports = {
  mode,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  }
};