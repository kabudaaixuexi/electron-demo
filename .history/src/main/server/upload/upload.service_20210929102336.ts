import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile, readFile } from '../__modular/file';
import { nestAssetsUrl } from '../../config/StaticPath'

@Injectable()
export class UploadService {
    getHello(): string {
        return 'Hello upload!';
    }

    getFiles(): any {
        console.log(process.env.__static + '/loader.html');
        console.log(readFile(process.env.__static + '/loader.html') );
        
        return readFile(process.env.__static + '/loader.html') 
    }

    appendLog(): any {
        return appendFile(nestAssetsUrl + '/recordlog' + '/aa.hut1', '22222222')
    }
}
