import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    @Get('')
    async getTest(): Promise<any> {
        return {
            statusCode: 200,
            data: await new UploadService().getHello()
        }
    }

    @Get('getFiles')
    async getFiles ():Promise<any> {
        if (false) {
            throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
        }
        return {
            statusCode: 200,
            data: await new UploadService().getFiles()['data'].toString()
        }
    }
}
