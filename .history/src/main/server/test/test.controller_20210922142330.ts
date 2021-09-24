import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus } from '@nestjs/common';
import { TestService } from './test.service';
import { Common } from '../type'
import { join } from 'path'

@Controller('test')
export class TestController {

    @Get('')
    async getTest(): Promise<any> {
        return {
            statusCode: 200,
            data: await new TestService().getHello()
        }
    }

    @Get('a')
    async get1(): Promise<any> {
        return {
            name: 'a'
        }
    }

    @Get('desk')
    @Render(join(__dirname, '..', 'renderer/view/user').replace(/\\/g, '\\\\'))
    async getHello(): Promise<Common> {
        if (false) {
            throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
        }
        return {
            statusCode: 200,
            data: await new TestService().getHello()
        }
    }

    @Get('desks')
    @Render(join(__dirname, '..', 'renderer/view/user.ejs').replace(/\\/g, '\\\\'))
    async getHellos(): Promise<Common> {
        if (false) {
            throw new HttpException('请求参数错误.', HttpStatus.FORBIDDEN)
        }
        return {
            statusCode: 200,
            data: await new TestService().getHello()
        }
    }

    @Post('doadd')
    doadd(@Body() body, @Response() res){
        console.log(body)
        res.redirect('desks')
    }
    
}
