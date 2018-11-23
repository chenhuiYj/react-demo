let webpack = require('webpack');
let path =require("path");
let glob = require('glob');
let serverHost = getIPAdress();
let HtmlWebpackPlugin = require('html-webpack-plugin');
//通过getEntry函数获取所有js脚本
let jsEntries = getEntry('./src/js/page/*.js');
let publicPath = '/dist/';
let config = {
    entry:jsEntries,
    // output: {
    //     path: path.join(__dirname, 'dist'), //文件的产出路径
    //     publicPath: '/dist/', //文件的引用路径,内存路径，开启服务，做热加载的时候，实际上引用的就是内存路径，即使删除了本地文件，也不会有任何影响，改变的实际上是内存上的文件。
    //     filename: "js/index.js"
    // },
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: publicPath,                //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name].js',            //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js?[chunkhash]'   //chunk生成的配置
    },
    module: {
        rules: [
            {
                //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                //如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[hash].[ext]'
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","stage-1",'react'],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, 'dist/html/index.html'), //生成的html存放路径，相对于path
        //     template: path.resolve(__dirname, './src/html/index.html'), //ejs模板路径,前面最好加上loader用于处理
        //     inject: 'body',  //js插入的位置，true/'head'/'body'/false
        // }),
    ],
    devServer: {
        contentBase: './',
        host: serverHost,
        port: 9099, //默认9090
        inline: true, //可以监控js变化
        hot: true//热启动
    },
};
let tplPages = Object.keys(getEntry('./src/html/*.html'));
tplPages.forEach((pathname)=> {
    console.log(pathname);
    let conf = {
        filename: path.resolve(__dirname, 'dist/html/'+ pathname +'.html'), //生成的html存放路径，相对于path
        template: path.resolve(__dirname, 'src/html/'+ pathname +'.html'), //ejs模板路径,前面最好加上loader用于处理
        inject: 'body',
        hash: true
    };
    //如果文件名和文件名所对应的js有匹配
    if (pathname in config.entry) {
        // conf.favicon = 'src/imgs/favicon.ico';
        conf.inject = 'body';
        conf.chunks = ['vendors', pathname];
        conf.hash = true;
    }
    //生成配置压栈
    config.plugins.push(new HtmlWebpackPlugin(conf));
});
module.exports = config;
/**
 * @description 获取本地IP地址
 * @returns {string|*}
 */
function getIPAdress() {
    let interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
function getEntry(globPath) {
    //获取globPath路径下的所有文件
    let files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, pathname, extname;
    //循环
    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);//返回路径的所在的文件夹名称
        extname = path.extname(entry);//返回指定文件名的扩展名称
        /**
         * path.basename(p, [ext])
         * 返回指定的文件名，返回结果可排除[ext]后缀字符串
         * path.basename('/foo/bar/baz/asdf/quux.html', '.html')=>quux
         */
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);//路径合并
        entries[basename] = entry;
    }
    //返回map=>{fileName:fileUrl}
    return entries;
}