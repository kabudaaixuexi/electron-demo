import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
// import { FilesModule } from './files.operation/files.module';
// io
import { NoteModule } from './note/note.module';
import { EventsGateway } from './socket.io/ws.gateway'
import { UploadModule } from './upload/upload.module';

@Module({
  providers: [EventsGateway],
  imports: [TestModule, UploadModule, NoteModule]
})
export class AppModule {}
