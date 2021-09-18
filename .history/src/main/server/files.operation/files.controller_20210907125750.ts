import { Controller, Post, UseInterceptors, Body, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer'
import * as fs from 'fs';
import path from 'path';

@Controller('files')
export class filesController {

    @Post('/upload')
    @UseInterceptors(FilesInterceptor('desk'))
    async UploadedFile(@UploadedFiles() files, @Body() body) {
        console.log(files,'s');
        
        await files.map( file => {
            console.log(file,'i');
            file.path = process.env.NODE_ENV === 'development' ? path.join(__dirname, file.path).split('/dist/electron/main/').join('/') :
            path.join(__dirname, file.path).split('/main/src/').join('/')
            console.log(file.path);
        })
        // console.log(files,'all');
        
        // return files
    }

}
