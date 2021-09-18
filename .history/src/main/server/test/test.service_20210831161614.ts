import { Injectable } from '@nestjs/common';

// @Injectable()
export const TestService = {
    getHello(): string {
        return 'Hello World!';
    }
}
