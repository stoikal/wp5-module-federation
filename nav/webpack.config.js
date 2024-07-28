const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:5001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 5001,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "nav",
      filename: "remoteEntry.js",
      library: { type: "var", name: "nav" },
      remotes: {},
      exposes: {
        "./HelloWorld": "./src/HelloWorld",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
};
