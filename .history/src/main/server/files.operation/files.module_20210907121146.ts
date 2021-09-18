import { Module } from '@nestjs/common';
import { filesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import dayjs from 'dayjs';
import path from 'path';
import { diskStorage } from 'multer';
// import * as nuid from 'nuid';
@Module({
  imports:[
    MulterModule.register({
      storage: diskStorage({
        //自定义路径
        // destination: `../resources/desk/${dayjs().format('YYYY-MM-DD')}`,
        // destination: `../resources/desk`,
        destination: path.dirname(`../resources/desk`),
        filename: (req, file, cb) => {
          // 自定义文件名
          // const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
          // return cb(null, filename);
          return  cb(null, file.originalname);
        },
      }),
    }),

  ],
  controllers: [filesController],
  providers: []
})
export class FilesModule {}