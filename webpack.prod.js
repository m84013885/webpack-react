const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    //引入抽取css样式插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map', //独立配置源码映射
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, //抽取css样式文件
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    }
                },
                { loader: 'postcss-loader' },
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        //配置样式抽取插件，生成的css文件名称为[name],[name]为entry中定义的key
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
})