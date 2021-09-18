import { Module } from '@nestjs/common';
import { filesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import dayjs from 'dayjs';
import { diskStorage } from 'multer';
import path from 'path';
@Module({
  imports:[
    MulterModule.register({
      storage: diskStorage({
        //自定义路径
        // destination: `../resources/desk/${dayjs().format('YYYY-MM-DD')}`,
        destination: `src/main/server/resources`,
        filename: (req, file, cb) => {
            file.rewritePath = process.env.NODE_ENV === 'development' ? path.join(__dirname, `/${file.fieldname}/${file.originalname}`).split('/dist/electron/main/').join('/') :
            path.join(__dirname, `/${file.fieldname}/${file.originalname}`).split('/main/src/').join('/')
            console.log(file.rewritePath);
            return cb(null, `/${file.fieldname}/${file.originalname}`);
        },
      }),
    }),

  ],
  controllers: [filesController],
  providers: []
})
export class FilesModule {}