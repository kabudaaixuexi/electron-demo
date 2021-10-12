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
}
