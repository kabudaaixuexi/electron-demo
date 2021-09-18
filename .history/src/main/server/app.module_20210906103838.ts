import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
// io
import { WsStartGateway } from './socket.io/ws.gateway'

@Module({
  providers: [WsStartGateway],
  imports: [TestModule]
})
export class AppModule {}
