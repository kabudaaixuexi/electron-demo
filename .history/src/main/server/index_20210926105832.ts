import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
import { nestAssetsUrl, nestEnginesUrl } from '../config/StaticPath'
const port = config.BuiltInServerPort
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        app.enableCors();
        app.useStaticAssets(nestAssetsUrl);
        // app.setViewEngine('ejs')
        app.setBaseViewsDir(nestEnginesUrl)
        await app.listen(port);
    },
    StopServer() {
        // console.log(app);
        app && app.close()
    }
}
