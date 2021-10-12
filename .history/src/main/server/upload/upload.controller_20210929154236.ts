import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus, UseInterceptors,UploadedFiles } from '@nestjs/common';
import { FileInterceptor,FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    @Post('')
    @UseInterceptors(FilesInterceptor("files"))
    async uploadFile(@UploadedFiles() files, @Body() body){
        console.log(files);
        console.log(body);
        
        return {
            statusCode: 200,
            data: await new UploadService().upload(files, body)
        }
    }
    
    @Get('getFiles')
    async getFiles ():Promise<any> {
        if (false) {
            throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
        }
        return {
            statusCode: 200,
            data: await new UploadService().getFiles()
        }
    }

    @Get('setRecord')
    async setRecord ():Promise<any> {
        if (false) {
            throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
        }
        return {
            statusCode: 200,
            data: await new UploadService().appendRecord()
        }
    }
}
