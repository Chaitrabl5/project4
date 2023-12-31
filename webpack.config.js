const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
entry: './src/main.ts',
module: {
rules: [
{
test: /\.ts?$/,
use: 'ts-loader',
exclude: /node_modules/,
},
],
},
resolve: {
extensions: ['.tsx', '.ts', '.js'],
},
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist'),
},
devServer: {
static: path.join(__dirname, "dist"),
compress: true,
port: 4000,
},

plugins:[
new HtmlWebpackPlugin({

title: "Webpack Generated File see the console",
inject: "body"
})
]
};