module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? '/Hotel/' : '/',
  devServer: {
    host: 'localhost',
    port: 8080,
  //   proxy: {

  //   }
  },
  configureWebpack: {
    resolve: {
        alias: {
          'assets': '@/assets',
          'components': '@/components',
          'views': '@/views'
        }
    }
  }
}