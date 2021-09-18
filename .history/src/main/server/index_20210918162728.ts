import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
import { winURL } from '../config/StaticPath'
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        app.enableCors();
        app.useStaticAssets('@main/server/resources');
        app.setBaseViewsDir('@main/server/views')
        app.setViewEngine('ejs')
        await app.listen(50001);
    },
    StopServer() {
        // console.log(app);
        app && app.close()
    }
}
