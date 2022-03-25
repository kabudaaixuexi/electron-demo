import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus, UseInterceptors,UploadedFiles } from '@nestjs/common';
import { FileInterceptor,FilesInterceptor,AnyFilesInterceptor } from '@nestjs/platform-express';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
    @Post('getNoteList')
    async getNoteList(@Body() body):Promise<any> {
        return {
            statusCode: 200,
            data: await new NoteService().getNoteList(body)
        }
    }
    
    @Post('addNote')
    async addtNote (@Body() body):Promise<any> {
        return {
            statusCode: 200,
            data: await new NoteService().addNote(body)
        }
    }

    @Post('editNote')
    async editNote (@Body() body):Promise<any> {
        return {
            statusCode: 200,
            data: await new NoteService().editNote(body)
        }
    }

    @Post('removeNote')
    async removeNote (@Body() body):Promise<any> {
        return {
            statusCode: 200,
            data: await new NoteService().removeNote(body)
        }
    }
}
