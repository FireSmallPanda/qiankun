module.exports = {
    webpack:(config)=> {
        config.output.library = 'reactApp'; // 打包的类库，项目名称
        config.output.libraryTarget = 'umd'; 
        config.output.publicPath = 'http://localhost:20000/'; // 端口
        return config;
    },
    devServer:(configFunction)=>{
        return function(proxy,allowedHost){
            const config = configFunction(proxy,allowedHost);
            config.headers = {
                'Access-Control-Allow-origin':'*' // 配置都允许跨域
            }
            return config;
        }
    }
}