import { Module } from '@nestjs/common';
import { filesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import dayjs from 'dayjs';
import { diskStorage } from 'multer';
// import * as nuid from 'nuid';
@Module({
  imports:[
    MulterModule.register({
      storage: diskStorage({
        //自定义路径
        // destination: `../resources/desk/${dayjs().format('YYYY-MM-DD')}`,
        destination: `src/main/server/resources`,
        filename: (req, file, cb) => {
          return  cb(null, `/desk/${file.originalname}`);
        },
      }),
    }),

  ],
  controllers: [filesController],
  providers: []
})
export class FilesModule {}