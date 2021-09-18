import { Controller, Post, UseInterceptors, Body, UploadedFiles, Get } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import multer from 'multer'



@Controller('files')
export class filesController {

    @Post('/upload')
    @UseInterceptors(FilesInterceptor('desk'))
    async UploadedFile(@UploadedFiles() files, @Body() body) {
        return files  
    }

    @Get('/desk')
    GetDeskImgList(): any {
        return new FilesService().getDeskImgList();
    }
}
