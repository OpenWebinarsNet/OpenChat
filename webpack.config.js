const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './static/index.html'
        })
    ]
}

module.exports = config