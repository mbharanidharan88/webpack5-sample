const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    elephant: "./src/elephant.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",

    // => Can also use this without clean-webpack-plugin
    // clean: {
    //   dry: true,
    //   keep: /\.css/,
    // },
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 3 kbs
          },
        },
      },
      {
        test: /\.(txt)$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_moudles/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebpackPlugin({
      publicPath: "",
      title: "Webpack Sample - Hello World",
      description: "Hello World Description",
      filename: "hello-world.html",
      chunks: ["hello-world"],
      // meta: {
      //   description: "Some Description",
      // },
      template: "src/page-template.hbs",
      minify: true, //Default is True
    }),
    new HtmlWebpackPlugin({
      publicPath: "",
      title: "Webpack Sample - Elephant",
      description: "Elephant Description",
      filename: "elephant.html",
      chunks: ["elephant"],
      // meta: {
      //   description: "Some Description",
      // },
      template: "src/page-template.hbs",
      minify: true, //Default is True
    }),
  ],
};
