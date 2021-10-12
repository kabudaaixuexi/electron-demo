import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile } from '../__modular/file';
import { nestAssetsUrl } from '../../config/StaticPath'

@Injectable()
export class UploadService {
    getHello(): string {
        return 'Hello upload!';
    }

    getFiles(): any {
        console.log(process.env.__static);
        console.log(fileBySuffix(process.env.__static, 'html') );
        
        return fileBySuffix(process.env.__static, 'html') 
    }

    appendLog(): any {
        return appendFile(nestAssetsUrl + '/recordlog' + '/aa.hut1', '22222222')
    }
}
