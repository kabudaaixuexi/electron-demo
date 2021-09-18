import { Body, Controller, Get, Post, Render, Response, HttpException, HttpStatus } from '@nestjs/common';
import { TestService } from './test.service';
import { Common } from '../type'

@Controller('test')
export class TestController {

    @Get('/desk')
    @Render('user/user')
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
        res.redirect('/user')
    }
    
}
