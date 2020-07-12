/**
 * 官网vue-cli中配置查看这个文件可以设置的东西
 * 
 */
// vue.config.js
module.exports = {
  lintOnSave:false,  // 关闭了eslint语法检查
  // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
  // 你需要在开发环境下将 API 请求代理到 API 服务器 ，跨域操作
  devServer: {
    proxy: {
      '/api': {  // 以api开头
        target: 'http://182.92.128.115/',  // 目标服务器地址
        changeOrigin: true   // 是否跨域
      },
    }
  }
}