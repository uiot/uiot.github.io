module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: "raw-loader"
        },
        {
          test: /^(.+)\/(assets)\/([^\/]+)\.html$/,
          loader: "html-loader"
        },

      ]
    }
  }
};
