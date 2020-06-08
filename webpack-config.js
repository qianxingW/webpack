'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   devServer: { // 开发服务器配置
      port: 3001, // 端口
      progress: true, // 显示进度条
      contentBase: './build', // 配置打开目录
      // open: true // 自动打开
      proxy: {
         '/api': {
            target: 'http://localhost:3000',
            // pathRewrite: {'^/api': ''}
         }
      },
      hot: true
   },
   mode: 'production', // development 开发 production 生产
   entry: './src/index.js', // 入口文件
   output: { // 打包后文件出口
      filename: 'bundle.js', // 打包文件名称  bundle.[hash:8].js 显示8位
      path: path.resolve(__dirname, 'build') // 打包文件地址
   },
   externals: { // 外部引用 不需要打包 
      jquery: 'jquery'
   },
   plugins: [ // webpack插件
      new HtmlWebpackPlugin({
         template: './src/index.html', // 模板
         filename: 'index.html', // 输出文件名
         minify: {
            removeAttributeQuotes: true, // 去双引号
            // collapseWhitespace: true, // 压缩一行
         },
         hash: true
      }),

      // new ExtractTextPlugin({
      //    filename: 'main.css', // 输出文件名
      // })
      // new webpack.ProvidePludin({ // 每个模块中注入$
      //    $: 'jquery'
      // })
   ],
   module: { // 模块
      rules: [ // 规则  loader从右到左 从下到上
         {
            test: /\/js$/,
            enforce: 'pre', // 优先执行 post后执行
            use: {
               loader: 'eslint-loader'
            },
            include: path.resolve(__dirname, 'src') // 包括
         },
         {
            test: /\/js$/,
            use: {
               loader: 'babel-loader'
            },
            include: path.resolve(__dirname, 'src'), // 包括
            exclude: /node_modules/ // 排除
         },
         // css-loader 解析@import语法
         // style-loader 将样式插入HTML
         {
            test: /\.(css|less)$/,
            use: [
               {
                  loader: 'style-loader',
                  options: { // 自由配置

                  }
               },
               {
                  loader: 'css-loader'
               },
               {
                  loader: 'less-loader'
               },
               // postcss-loader添加前缀 需引用autoprefixer
            ]
         },
         { //暴露全局
            test: require.resolve('jquery'),
            use: {
               loader: 'expoce-loader?$'
            }
         }
      ]
   },
   // 映射文件 方便调试
   // source-map 生成一个map映射文件 出错时会显示行和列
   // eval-source-map 不会产生单独文件 出错时会显示行和列
   // cheap-module-source-map 生成单独文件 但是没有映射
   // cheap-module-eval-cource-map 不会生成单位文件 会映射 不显示列
   devtool: 'cheap-module-eval-cource-map',
   // watch: false, // 实时编译
   // watchOptions: {
   //    pol: 1000, // 每秒查询几次
   //    aggregatetiTimeout: 500, // 防抖
   //    ignored: /node_modules/, // 不需要监控那个文件
   // }
};