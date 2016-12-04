/**
 * Created by liuchungui on 16/12/4.
 */
const webpack = require("webpack");

module.exports = {
    //入口文件
    entry: {
        demoApp: "./demoApp.js",
        vendor: "./vendor.js"
    },
    //生成的文件配置
    output: {
        //生成文件的路径,__dirname是当前项目路径,与webpack.config.js同级
        path: __dirname,
        //文件名
        filename: "[name].bundle.js"
    },
    module: {
        //将css文件打包进去
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        /**
         * 此插件会自动加载jquery,解决jquery无法引用的问题
         */
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};