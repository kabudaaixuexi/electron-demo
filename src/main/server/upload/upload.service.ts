import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile, readFile, getFiles } from '../__modular/file';
import { nestAssetsUrl } from '../../config/StaticPath'
import { createWriteStream } from 'fs';

@Injectable()
export class UploadService {
    upload(files, path) : Promise<any> | any {
        console.log(files,'files');
        console.log(path,'body');
        files.map((file, index) => {
            createWriteStream(`${process.env.__static}/resources/${path}/${file.originalname}`).write(file.buffer);
        })
        if (path == 'note') {
            return `http://localhost:25566/resources/${path}/${files[0].originalname}`;
        }else {
            return '上传成功'
        }
    }

    // getFile(path, name): any {
    //     console.log(name,'name');
    //     return getFiles(process.env.__static + `/resources/${path}`).filter((file) => {
    //         return file == name
    //     })[0] ? `http://localhost:25566/resources/${path}/${name}` : ''
    // }

    getFiles(where): any {
        return getFiles(process.env.__static + `/resources/${where}`).map((file) => {
            return `http://localhost:25566/resources/${where}/${file}`
        }).filter(httpFile => httpFile.indexOf('.DS_Store') === -1 )
    }

    appendRecord(): any {
        return appendFile(nestAssetsUrl + '/recordlog' + '/hut1.record', 
        JSON.stringify({__sender: '花心大萝卜',__message: {__type: 'test',__conn: '哈哈哈',__nnew: false},__source: '聊天室1',__hasread: ['花心大萝卜'],__date: 111}))
    }
}
