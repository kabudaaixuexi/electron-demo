import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FilesService {
    getDeskImgList(): any {
        return 'Hello World!';
    }
}
