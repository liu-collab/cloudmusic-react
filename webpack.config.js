module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,

        loader: 'url-loader?limit=50000&name=[path][name][ext]',
      },
    ],
  },
  // devServer: {
  //   clinet: {
  //     overlay: false,
  //   },
  // },
};
