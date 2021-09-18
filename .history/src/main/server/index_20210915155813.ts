import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import config from '@config/index'
// const port = config.BuiltInServerPort
// import { join } from 'path'
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        // app.enableCors();
        // app.useStaticAssets(join(__dirname, process.env.NODE_ENV === 'development' ? 'main/resources' : ''));
        // app.useStaticAssets('src/main/server/resources');
        // console.log(`nest服务启动:::${port}`);
        
        await app.listen(50001);
    },
    StopServer() {
        // console.log(app);
        app && app.close()
    }
}
