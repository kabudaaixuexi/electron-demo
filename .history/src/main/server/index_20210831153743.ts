import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
// const port = config.BuiltInServerPort
const port = 8900
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        console.log(port);
        
        await app.listen(port);
    },
    async StopServer() {
        app && await app.close()
    }
}
