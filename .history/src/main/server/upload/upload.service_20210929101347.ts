import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile } from '../__modular/file';
import { nestAssetsUrl } from '../../config/StaticPath'

@Injectable()
export class UploadService {
    getHello(): string {
        return 'Hello upload!';
    }

    getFiles(): any {
        return fileBySuffix(nestAssetsUrl + '/recordlog', 'hut1') 
    }

    appendLog(): any {
        return appendFile(nestAssetsUrl + '/recordlog' + '/aa.hut1', '22222222')
    }
}
