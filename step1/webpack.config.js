/**
 * Created by zm on 2017/1/10.
 */

module.exports = {
    entry: "./js/app.js",
    output:{
        filename:"./js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};