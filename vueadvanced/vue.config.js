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
    },
    // chainWebpack: config => {
    //     config.module
    //       .rule("i18n")
    //       .resourceQuery(/blockType=i18n/)
    //       .type('javascript/auto')
    //       .use("i18n")
    //         .loader("@kazupon/vue-i18n-loader")
    //         .end()
    //       .use('yaml')
    //         .loader('yaml-loader')
    //         .end()
    //     config.module.rule('yaml')
    //         .test(/\.ya?ml$/)
    //             // 指定到某个目录下的文件，如果项目有其它目录用到.yaml文件可以指定到src目录就行了
    //         // .include.add(resolve('src/assets/lang'))
    //         .end()
    //         .type('json')
    //         .use("yaml-loader")
    //         .loader("yaml-loader")
    //         .end()
    //   }
}