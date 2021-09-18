import { Module } from '@nestjs/common';
// import { TestService } from './test.service';
import { uploadController } from './files.controller';

@Module({
  controllers: [uploadController],
  providers: []
})
export class FilesModule {}
