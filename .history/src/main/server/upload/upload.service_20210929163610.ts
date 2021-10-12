import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile, readFile, getFiles, access } from '../__modular/file';
import { nestAssetsUrl } from '../../config/StaticPath'
import { createWriteStream } from 'fs';

@Injectable()
export class UploadService {
    upload(files, body) : Promise<any> | any {
        console.log(files,'files');
        console.log(body,'body');
        files.map((file, index) => {
            createWriteStream(`${process.env.__static}/resources/desk/${file.originalname}`).write(file.buffer);
        })
        return '上传成功';
    }

    getFiles(where): any {
        console.log(process.env.__static + '/recordlog/hut1.record');
        console.log(readFile(process.env.__static + '/recordlog/hut1.record') );
        return getFiles(process.env.__static + `/resources/${where}`).map((file) => {
            return `http://192.168.5.85:25566/resources/${where}/${file}`
        })
    }

    appendRecord(): any {
        return appendFile(nestAssetsUrl + '/recordlog' + '/hut1.record', 
        JSON.stringify({__sender: '花心大萝卜',__message: {__type: 'test',__conn: '哈哈哈',__nnew: false},__source: '聊天室1',__hasread: ['花心大萝卜'],__date: 111}))
    }
}
