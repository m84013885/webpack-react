const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
    entry: {
        index: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/[name].[chunkhash:5].js',
        chunkFilename: 'assets/[name].[chunkhash:5].js',
        publicPath: '',
    },
    module: {
        rules: [
            //配置babel-loader用来编译和解析js
            {
                test: /\.(m?js|jsx)$/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.(png|svg|svga|jpg|gif|mp4)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[hash][ext][query]',
                    publicPath: '',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new ESLintPlugin({
            extensions: ['.js','.jsx'],
            failOnError: true,
            emitWarning: true,
            emitError: true,
        })
    ]
}