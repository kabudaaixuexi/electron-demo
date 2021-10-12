import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus, UseInterceptors,UploadedFiles } from '@nestjs/common';
import { FileInterceptor,FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    @Post('')
    @UseInterceptors(FilesInterceptor("files"))
    uploadMultiple(@UploadedFiles() files, @Body() body) {
        // files 变成数组,可以传递多个文件 
        console.log(files, body);
        return "上传成功"
    }
    // async uploadFile(@UploadedFiles() files, @Body() body){
    //     console.log(files);
    //     console.log(body);
        
    //     return {
    //         statusCode: 200,
    //         data: await new UploadService().upload(files, body)
    //     }
    // }
    
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
