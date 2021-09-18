import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    
    @Get('/message')
    getHello(): string {
        return new TestService().getHello();
    }
}
