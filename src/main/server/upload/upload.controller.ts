import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus, UseInterceptors,UploadedFiles } from '@nestjs/common';
import { FileInterceptor,FilesInterceptor,AnyFilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    @Post('desk')
    @UseInterceptors(AnyFilesInterceptor())
    async uploadFilesDesk(@UploadedFiles() files, @Body() body){
        return {
            statusCode: 200,
            data: await new UploadService().upload(files, 'desk')
        }
    }
    
    @Post('note')
    @UseInterceptors(AnyFilesInterceptor())
    async uploadFilesNote(@UploadedFiles() files, @Body() body){
        return {
            statusCode: 200,
            data: await new UploadService().upload(files, 'note')
        }
    }

    // @Post('getFile')
    // async getFile (@Body() body):Promise<any> {
    //     return {
    //         statusCode: 200,
    //         data: await new UploadService().getFile(body['path'], body['name'])
    //     }
    // }
    
    @Post('getFiles')
    async getFiles (@Body() body):Promise<any> {
        return {
            statusCode: 200,
            data: await new UploadService().getFiles(body['type'])
        }
    }

    @Get('setRecord')
    async setRecord ():Promise<any> {
        return {
            statusCode: 200,
            data: await new UploadService().appendRecord()
        }
    }
}
