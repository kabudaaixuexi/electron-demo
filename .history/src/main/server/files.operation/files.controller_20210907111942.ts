import { Controller, Post, UseInterceptors, Body, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class uploadController {

    @Post('/upload')
    @UseInterceptors(FilesInterceptor('files'))
    uploadMultiple(@UploadedFiles() files, @Body() body) {
        console.log(files, body);
        return "上传成功"
    }

}
