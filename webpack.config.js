const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry:{
  // app:'./src/index.js',
  // print:'./src/print.js'
  app:'./src/index.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  plugins:[
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title:'Output Management'
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), //绝对路径
    publicPath: '/'
  }
  
};