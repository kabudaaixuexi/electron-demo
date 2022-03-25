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
}
