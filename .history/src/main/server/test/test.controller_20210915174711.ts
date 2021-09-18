import { Controller, Get, Render } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    @Get('/message')
    @Render('user/user')
    getHello(): string {
        return new TestService().getHello();
    }
    
}
