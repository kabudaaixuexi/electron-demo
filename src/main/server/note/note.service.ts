import { Injectable } from '@nestjs/common';
import { nestRecordNoteUrl } from '../../config/StaticPath'
import { fileBySuffix, appendFile, readFile, rewriteFile } from '../__modular/file';
import { getTime, getUuiD } from '../__modular/utils';

@Injectable()
export class NoteService {
    async getNoteList(state): Promise<any> {
        const data = await readFile(nestRecordNoteUrl + `/${state.uid}.json`)
        return data == 0 ? [] : data.trim().split('⚡︎').filter(i => !!i).map(i => JSON.parse(i))
    }

    async addNote(state): Promise<any>  {
        state.noteid = getUuiD()
        state.latestTime = getTime()
        let data = await readFile(nestRecordNoteUrl + `/${state.uid}.json`)
        data = data == 0 ? [] : data.trim().split('⚡︎').filter(i => !!i).map(i => JSON.parse(i))
        data.unshift(state) 
        data = data.map(i => JSON.stringify(i, null, 2)).join('⚡︎\n')
        rewriteFile(nestRecordNoteUrl + `/${state.uid}.json`, data)
    }

    async editNote(state):  Promise<any>  {
        let data = await readFile(nestRecordNoteUrl + `/${state.uid}.json`)
        data = data == 0 ? [] : data.trim().split('⚡︎').filter(i => !!i).map(i => JSON.parse(i))
        data = data.map(i => {
            // i.latestTime = getTime()
            // state.latestTime = getTime()
            state.latestTime = state.latestTime || i.latestTime
            i = JSON.stringify(i.noteid == state.noteid ? state : i, null, 2)
            return i
        }).join('⚡︎\n')
        rewriteFile(nestRecordNoteUrl + `/${state.uid}.json`, data)
    }

    async removeNote(state): Promise<any> {
        let data = await readFile(nestRecordNoteUrl + `/${state.uid}.json`)
        data = data == 0 ? [] : data.trim().split('⚡︎').filter(i => !!i).map(i => JSON.parse(i))
        data = data.filter(i => i.noteid != state.noteid).map(i => JSON.stringify(i, null, 2)).join('⚡︎\n')
        rewriteFile(nestRecordNoteUrl + `/${state.uid}.json`, data)
    }
}
