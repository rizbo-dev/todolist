const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const common = require('./webpack.common');
const { default: merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: "./imgs/[name].[hash].[ext]",
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});