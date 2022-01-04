const packageName = require('./package.json').name;
module.exports = {
    webpack:(config)=> {
        config.output.library = `${packageName}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${packageName}`;
        return config
    },
    devServer:(configFunction)=>{
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
        config.headers = {
                "Access-Control-Allow-Origin": "*"
            }
            return config
        }
    }
}