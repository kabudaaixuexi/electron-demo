import { Module } from '@nestjs/common';
// import { TestModule } from './test/test.module';
// import { FilesModule } from './files.operation/files.module';
// io
// import { EventsGateway } from './socket.io/ws.gateway'

@Module({
  // providers: [EventsGateway],
  providers: [],
  // imports: [TestModule, FilesModule]
  imports: []
})
export class AppModule {}
