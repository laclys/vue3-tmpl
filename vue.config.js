/* eslint-disable @typescript-eslint/no-var-requires */
const { publicUrl, PORT } = require('./config/const')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? publicUrl[process.env.BUILD_ENV]
    : '/',
  devServer: {
    port: PORT,
    progress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/ops-crm/wapi': {
        target: 'http://ops.test.ximalaya.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
