module.exports = {
  lintOnSave: true, // 移除js编译警告，默认值default，有警告时不能访问页面
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'IPU APP Store',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  publicPath: './',
  devServer: {
    proxy: 'http://www.aiipu.com:18008',
  },
};
