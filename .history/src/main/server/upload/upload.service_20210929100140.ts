import { Injectable } from '@nestjs/common';
import { fileBySuffix } from '../__modular/file';

@Injectable()
export class UploadService {
    getHello(): string {
        return 'Hello upload!';
    }
}
