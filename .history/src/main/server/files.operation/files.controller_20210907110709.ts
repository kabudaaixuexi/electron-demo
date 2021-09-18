import { Controller, Post, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class uploadController {

    @Post('/upload')
    @UseInterceptors(FilesInterceptor('file'))
    uploadFile(@UploadedFiles() file) {
        console.log(file);
    }

}
