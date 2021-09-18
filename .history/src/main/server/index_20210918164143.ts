import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        app.enableCors();
        app.useStaticAssets('@main/server/resources');
        app.setViewEngine('ejs')
        app.setBaseViewsDir('@main/server/views')
        await app.listen(port);
    },
    StopServer() {
        // console.log(app);
        app && app.close()
    }
}
