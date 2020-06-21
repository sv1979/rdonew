const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const path = require('path');

module.exports = {
    mode: "development",
    entry: __dirname + "/src/index.js", // webpack entry point. Module to start building dependency graph
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',  // Name of generated bundle after build
    },
    module: {  // where we defined file patterns and their loaders
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  outputPath: 'images',
                  name: '[name].[ext]'
                },
            },
        ]
    },
    plugins: [  // Array of plugins to apply to build chunk
        // new HtmlWebpackPlugin({
        //     template: __dirname + "/src/public/index.html",
        //     inject: 'body'
        // })
    ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: './public',  //source of static assets
        port: 7700, // port to run dev-server
    }
};
