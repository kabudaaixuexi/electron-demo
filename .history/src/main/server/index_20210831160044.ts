import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        await app.listen(port);
    },
    async StopServer() {
        console.log(app);
        app && app.close()
    }
}
