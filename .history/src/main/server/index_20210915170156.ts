import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config/index'
const port = config.BuiltInServerPort
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule, { cors: true});
        // app.enableCors();
        // // app.useStaticAssets(join(__dirname, process.env.NODE_ENV === 'development' ? 'main/resources' : ''));
        // app.useStaticAssets('src/main/server/resources');
        // console.log(`nest服务启动:::${port}`);
        // app.setBaseViewsDir('src/main/server/views')
        // app.setViewEngine('ejs')
        // await app.listen(port);
    },
    StopServer() {
        // console.log(app);
        // app && app.close()
    }
}
