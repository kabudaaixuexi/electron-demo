import { Injectable } from '@nestjs/common';
import { fileBySuffix, appendFile, readFile, getFiles, writeFile } from '../__modular/file';
import { nestRecordChatUrl } from '../../config/StaticPath'
import { getTime } from '../__modular/utils';

@Injectable()
export class SocketService {

    recordChat(state): void {
        appendFile(nestRecordChatUrl + '/' + state.__source + '-' + getTime() + '.json',`${JSON.stringify(state, null, 2)},\n`)
    }
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
