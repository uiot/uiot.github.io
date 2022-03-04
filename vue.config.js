module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /(\.md)|(\.ico)$/,
          loader: "raw-loader",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
  },
};
