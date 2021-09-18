import { Controller, Post, UseInterceptors, Body, UploadedFiles, Get, Render, HttpException, HttpStatus } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { Common } from '../type'


@Controller('files')
export class filesController {

    @Post('/upload')
    @UseInterceptors(FilesInterceptor('desk'))
    async UploadedFile(@UploadedFiles() files, @Body() body) {
        return files  
    }

    @Get('/desk')
    // @Render('user/user')
    async GetDeskImgList(): Promise<Common> {
        if (false) {
            throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
        }
        return {
            statusCode: 200,
            data: await new FilesService().getDeskImgList()
        }
    }
}
