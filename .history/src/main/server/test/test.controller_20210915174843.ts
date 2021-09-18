import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    @Get('/message')
    @Render('user/user')
    getHello(): string {
        return new TestService().getHello();
    }

    @Post('doadd')
    doadd(@Body() body, @Response() res){
        console.log(body)
        res.redirect('/user')
    }
    
}
