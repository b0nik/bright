'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname,'/client/styles/main.less'),
        path.join(__dirname,'/client/index.js')
    ],
    output: {
        path: path.join(__dirname, '/build/'),
        publicPath: '/',  //dynamic load scripts
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.less', 'css'],
        modulesDirectories: ['node_modules', path.join(__dirname, './client')]
    },
    devtool: null,

    plugins: [
        new CleanWebpackPlugin(['build'], {
            verbose: true,
            dry: false,
            exclude:['media']
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks:3

        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    "presets": ["react", "es2015"]
                }
            },
            {
                test:/\.(png|jpg|svf|ttf|eot|woff|woff2|ico)$/,
                exclude:/\/node_modules\//,
                loader:'file?name=[path][name].[ext]&limit=4096'
            },
            {
                test:/\.(png|jpg|svf|ttf|eot|woff|woff2)$/,
                include:/\/node_modules\//,
                loader:'url?name=[1].[name].[ext]&regExp=node_modules/(.*)&limit=4096'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!less')
            }
        ]
    },
};


//  webpack -p  --progress --colors --config webpack.production.js