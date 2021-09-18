import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from './socket.io/ws.adapter'
import config from '@config/index'
const port = config.BuiltInServerPort
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        app.useWebSocketAdapter(new WsAdapter(app))
        await app.listen(port);
    },
    StopServer() {
        console.log(app);
        app && app.close()
    }
}
