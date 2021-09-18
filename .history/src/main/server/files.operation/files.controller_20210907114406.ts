import { Controller, Post, UseInterceptors, Body, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer'
@Controller('files')
export class filesController {

    @Post('/upload')
    @UseInterceptors(FilesInterceptor('files'))
    async UploadedFile(@UploadedFiles() files, @Body() body) {
        console.log(files, body);
        return files
    }

}
