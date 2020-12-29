let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

        devServer: {
            port: 3000,
            open: true,
    compress: true,
    hot: true
        },

        plugins: [

            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'), 
                filename: 'index.html',
                
              }),
              new CleanWebpackPlugin(),
            //   new MiniCssExtractPlugin({
            //     filename: `./css/${filename('css')}`,
          
            //   }),
        ],
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            ],
          },


    };

