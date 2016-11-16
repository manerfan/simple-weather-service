/*
 * ManerFan(http://manerfan.com). All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by ManerFan on 2016/11/15.
 */
//
const path = require('path');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const BannerPlugin = require('webpack/lib/BannerPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    debug: true,
    devtool: 'source-map',

    entry: {
        app: './app/views',
        vendor: ['redux', 'react', 'react-dom', 'react-redux', 'react-bootstrap', 'whatwg-fetch']
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[id].chunk.js",
        path: path.join(__dirname, 'public/build')
    },

    /* 通过 script -- cdn 引入 */
    /*externals: {
     "jquery": "jQuery"
     },*/

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },

    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new ExtractTextPlugin('[name].css'),
        new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            },
            exclude: /(node_modules)/
        }),
        /*new SourceMapDevToolPlugin({
         exclude: /(node_modules)/,
         filename: '[file].map',
         columns: false
         }),*/
        new BannerPlugin('This file is created by ManerFan')
    ]
};