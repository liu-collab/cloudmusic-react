
const path = require("path")

const reslove = dir => path.resolve(__dirname, dir)


module.exports = {
  webpack: {
    alias: {
      "@": reslove("src")

    },
    module: {
      rules: [{
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name][hash].[ext]',
          outputPath: 'images',
          esModule: false,
        },
      }]
    }
  }

}