const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (arg) => {
  console.log(
    "PROCESS PORT",
    process.env.PORT
  );
  return {
    mode: "development",
    entry: path.resolve(
      "./src/index.js"
    ),
    output: {
      path: path.resolve(
        __dirname,
        "dist"
      ),
      filename: "[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: [
            path.resolve(
              __dirname,
              "src"
            ),
          ],
          exclude: [
            path.resolve(
              __dirname,
              "node_modules"
            ),
          ],
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ],
            },
          },
        },
        {
          test: /.(css|scss)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png|svg|gif)$/,
          type: "asset/resource",
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader",
            },
            {
              loader: "markdown-loader",
              options: {
                // Pass options to marked
                // See https://marked.js.org/using_advanced#options
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        meta: (() => {
          if (arg.dark) {
            return {
              "color-scheme":
                "light dark",
            };
          }
          return {};
        })(),
      }),
    ],
    resolve: {
      extensions: [
        ".json",
        ".js",
        ".jsx",
      ],
    },
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      hot: true,
      port: process.env.PORT || "auto",
      historyApiFallback: true,
      client: {
        progress: true,
      },
    },
  };
};
