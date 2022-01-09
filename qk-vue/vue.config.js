module.exports = {
    devServer:{
        port:10000,
        headers:{
            'Access-Control-Allow-origin':'*' // 配置都允许跨域
        }
    },
    configureWebpack:{
        output:{
            library: 'vueApp', 
            libraryTarget: 'umd'
        }
    }
}