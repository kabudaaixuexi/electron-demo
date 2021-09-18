import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus } from '@nestjs/common';
import { TestService } from './test.service';
import { Common } from '../type'

@Controller('test')
export class TestController {

    @Get('')
    async getTest(): Promise<any> {
        return {
            name: '11111'
        }
    }

    @Get('a')
    async get1(): Promise<any> {
        return {
            name: 'a'
        }
    }

    @Get('/a')
    async get2(): Promise<any> {
        return {
            name: '/a'
        }
    }

    @Get('/desk')
    @Render('@main/server/views/user/user')
    async getHello(): Promise<Common> {
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
        res.redirect('/a')
    }
    
}
