
const path = require('path');

module.exports = {
  mode:'production',
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'simple-uuidv4.js',
    library:'simple-uuidv4',
    libraryTarget:'umd',
  },
  resolve:{
    extensions:[".webpack.js", ".web.js", ".ts", ".js"],
  },
};
