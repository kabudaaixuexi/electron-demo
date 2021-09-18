import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var app = null
export default {
    async StatrServer() {
        app = await NestFactory.create(AppModule);
        await app.listen(3000);
        return true
    },
    async StopServer() {
        app && await app.close()
        return true
    }
}