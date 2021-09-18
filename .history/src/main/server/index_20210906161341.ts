import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
const server = require('net').createServer().listen(port)
var app = null
export default {
    StatrServer() {
        // 检测端口占用
        server.on('error', function (err) {
            (err.code === 'EADDRINUSE') && console.log(`${port}端口服务已经开启`)
        })
        server.on('listening',async function () {
            server.close() // 关闭服务
            app = await NestFactory.create(AppModule);
            // app.useStaticAssets(join(__dirname,'..','static'));
            await app.listen(port);
            console.log(`${port}端口服务已经开启`)
        })
    },
    StopServer() {
        console.log(app);
        app && app.close()
    }
}
