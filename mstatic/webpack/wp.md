#1. 全局安装webpack
```
npm install -g webpack webpack-cli
```
#2. 创建文件夹初始化
```
//创建文件夹
mkdir webpack4demo
//进入
cd webpack4demo
//初始化
npm init -y
```
#3. 创建文件夹src 里面创建index.js文件
```
index.js

const s=()=>{ 
console.log('s init')
}
s()

```
#4.创建webpack.config.js文件
```
const path = require("path");
module.exports = {
    entry: {
        index: "./src/index.js" //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name].bundle.js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, "dist")//输出文件路径
    }
}

执行webpack --mode development将会生成dist/index.bundle.js
```
#5. 创建index.html，并引入js
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>$Title$</title>
</head>
<body>
$END$
</body>
<script src="./dist/index.bundle.js"></script>
</html>
```
#6. 对css，js进行编译打包合并生成md5
创建a.js，c.js，a.css，更改index.js
```
import a from './a.js'
import c from './c.js'
const s=()=>{
    a.init()
    a.cinit()
    c.init()
    console.log('s init')
}
s()
```
#7.配置webpack.config.js文件 
```
const path = require("path");
module.exports = {
    entry: {
        index: "./scripts/index.js"
    },
    output: {
        filename: "[name].bundle.[hash].js",//[hash]会在后面生成随机hash值
        path: path.join(__dirname, "dist")
    },
    module: { // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]//处理css
            }
        ]
    },
}
```
#8. 安装style-loader， css-loader
```
npm install style-loader css-loader --save-dev

执行webpack --mode development将会看到一个带md5值得js文件
```
#9. CSS中的图片处理
```
安装url-loader, file-loader

npm install url-loader file-loader --save-dev

配置webpack.config.js文件
module: {
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    outputPath:'images/',//输出到images文件夹
                    limit:500  //是把小于500B的文件打成Base64的格式，写入JS
                }
            }]
        }
    ]
},


执行webpack --mode development将会看到dist中有一个images文件夹中有一张图片，打开index.html
```
#10. js自动注入html文件
```
使用插件html-webpack-plugin，可以将生成的js自动引入html页面，不用手动添加

//安装html-webpack-plugin
npm install html-webpack-plugin --save-dev
//安装webpack webpack-cli
npm install webpack webpack-cli --save-dev

配置webpack.config.js文件
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin
module.exports = {
    entry: {
        index: "./scripts/index.js"
    },
    output: {
        filename: "[name].bundle.[hash].js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [// 对应的插件
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html',//输出文件名
            template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
    ]
}
```
#11. 删除指定文件
```
使用插件clean-webpack-plugin，删除指定文件
npm install clean-webpack-plugin --save-dev


配置webpack.config.js文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//引入    
plugins: [// 对应的插件
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html',//输出文件名
            template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    ]
		
		
执行webpack --mode development，可以看到dist目录被删除，又生成一个新的dist，之前的js文件已经被删除。		
```
#12. 热更新，自动刷新
```
我们将用到webpack-dev-serve
npm install webpack-dev-serve --save-dev
npm i webpack-dev-server -D

配置webpack.config.js文件
const webpack = require("webpack");
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
    }),
    new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    // 热更新，热更新不是刷新
    new webpack.HotModuleReplacementPlugin()
],
devServer: {//配置此静态文件服务器，可以用来预览打包后项目
    inline:true,//打包后加入一个websocket客户端
    hot:true,//热加载
    contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
    host: 'localhost',//主机地址
    port: 9090,//端口号
    compress: true//开发服务器是否启动gzip等压缩
},
```
#13. 配置package.json
```
"scripts": {
  "dev": "webpack-dev-server --mode development"
},


执行npm run dev 访问 http://localhost:9090/
```
#6. 
```

```
#6. 
```

```
#6. 
```

```