import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
import { join } from 'path'
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        app.enableCors();
        // app.useStaticAssets('@main/server/resources');
        
        app.useStaticAssets(join(__dirname, '.', 'resources'));
        app.setViewEngine('ejs')
        // app.setBaseViewsDir('@main/server/views')
        console.log(app);
        
        await app.listen(port);
    },
    StopServer() {
        // console.log(app);
        app && app.close()
    }
}
