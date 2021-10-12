import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile, readFile } from '../__modular/file';
import { nestAssetsUrl } from '../../config/StaticPath'
import { createWriteStream } from 'fs';
import { join } from 'path';
@Injectable()
export class UploadService {
    upload(files, body) : Promise<any> | any {
        for (const file of files) {
            const writeImage = createWriteStream(join(__dirname, '../../', 'public/upload', `${body.name}-${Date.now()}-${file.originalname}`));
            writeImage.write(file.buffer);
        }
        return '上传成功';
    }

    getFiles(): any {
        console.log(process.env.__static + '/recordlog/hut1.record');
        console.log(readFile(process.env.__static + '/recordlog/hut1.record') );
        
        return readFile(process.env.__static + '/recordlog/hut1.record') 
    }

    appendRecord(): any {
        return appendFile(nestAssetsUrl + '/recordlog' + '/hut1.record', 
        JSON.stringify({__sender: '花心大萝卜',__message: {__type: 'test',__conn: '哈哈哈',__nnew: false},__source: '聊天室1',__hasread: ['花心大萝卜'],__date: 111}))
    }
}
