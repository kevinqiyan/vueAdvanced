module.exports = {
    publicPath:process.env.NODE_ENV ==='production'?'./':'/',
    // 输出路径
    outputDir:'dist',
    // 打包后静态资源文件位置
    assetsDir:'static',
    // 打包文件名是否hash
    filenameHashing:false,
    // eslint-loader保存时是否检查
    lintOnSave:true,
    productionSourceMap:false,
    pages:{
        index:{
            entry:'src/main.js',
            title:'Vue进阶练习'
        }
    },
    //服务器进行配置
    devServer:{
        host:'localhost',
        port:5253,
        open:true,
        hotOnly:true,//热更新
        proxy:{
            '/api':{
                target:'http://musicapi.leanapp.cn/artist/list', //网易云list接口
                changeOrigin:true,
                secure:false,
                pathRewrite:{
                    '^api':''
                }
            }
        }
    }

}