const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// .BundleAnalyzerPlugin;
module.exports = {
  // ...
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // new BundleAnalyzerPlugin(),

    ],
    },

    //to change title
    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "夏活攒抽规划";
              return args;
          })
  }
}