import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        console.log(port);
        
        await app.listen(port);
    },
    async StopServer() {
        app && shelljs.exec(`xl_close_port -p ${port}`)
    }
}
