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
        files = files.map( file => {
            file.path = path.join(__dirname, file.path)
        })
        return files
    }

}
