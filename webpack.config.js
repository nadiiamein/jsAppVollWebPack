let path = require('path');

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
    };

