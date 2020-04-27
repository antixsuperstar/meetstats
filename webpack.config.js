const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = env => {
    return {
        entry: {
            index: './src/index.js'
        },
        module: {
            rules: [
                { test: /\.js$/, use: 'babel-loader' },
                { test: /\.vue$/, use: 'vue-loader' },
                { test: /\.s?css$/, use: ['vue-style-loader', 'css-loader']},
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new VueLoaderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new CopyPlugin([
                { from: 'node_modules/sql.js/dist/sql-wasm.wasm' },
                { from: 'node_modules/sql.js/dist/sql-wasm.js'},
            ]),
        ]
    };
};
