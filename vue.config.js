const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias.set('@', resolve('./src'))

    config.plugin('html').tap(args => {
      args[0].title = '后台管理'
      return args
    })
  },
  // 主题配置
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1890ff',
            'link-color': '#1890ff',
            'border-radius-base': '2px',
            'font-size-base': '14px'
          },
          javascriptEnabled: true
        }
      }
    }
  },

  // 开发服务器设置
  devServer: {
    overlay: {
      // warnings: true,
      // errors: true
    },
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    compress: true, // 自动压缩
    open: true, // 自动打开浏览器
    inline: true, // 页面自动刷新
    hot: true // 热更新
  },
  //  生产环境关闭报错
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境是否生成soureceMap
  productionSourceMap: false
}
