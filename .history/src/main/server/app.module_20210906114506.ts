import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
// io
import { EventsGateway } from './socket.io/ws.gateway'

@Module({
  providers: [EventsGateway],
  imports: [TestModule]
})
export class AppModule {}
