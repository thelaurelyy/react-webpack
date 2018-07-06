const path = require('path');
module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'temp/'
    },
    devServer: {
        contentBase: './',
        host: "localhost",
        port: "1717",
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}