let path = require('path')

let MINI_CSS_EXTRSCT_PLUGIN = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: {
        app: './app/app.js'
    },

    output: {
        path: path.resolve(__dirname + '/build'),


        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // {
                //     loader: 'style-loader'
                // },
                {
                    loader: MINI_CSS_EXTRSCT_PLUGIN.loader
                },
                {
                    loader: 'css-loader'
                },
            ]
        }, {
            test: /\.less$/,
            use: [
                // {
                //     loader: 'style-loader'
                // },
                {
                    loader: MINI_CSS_EXTRSCT_PLUGIN.loader
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader'
                },
            ]
        }]
    },
    plugins: [
        new MINI_CSS_EXTRSCT_PLUGIN({
            filename: '[name].min.css'
        })
    ]
}