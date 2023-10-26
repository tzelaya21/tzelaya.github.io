const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
        .loader("vue-svg-inline-loader")
        .options({ /* ... */ });
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/tzelaya.github.io/' : '/'
})
