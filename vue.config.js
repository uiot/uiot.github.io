module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: '/github-pages/',
  configureWebpack: {
    module: {
      rules: [ {
        test: /\.md$/,
        loader: 'raw-loader',
      } ]
    }
  }
};
