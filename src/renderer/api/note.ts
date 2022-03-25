import request from '@renderer/utils/request'
import {getNoteListReq,addNoteReq,editNoteReq,removeNoteReq } from './type'
export default {
    getNoteList:async (payload:getNoteListReq) => {
        const { data } = await request({
            url: '/note/getNoteList',
            data: {...payload}
        })
        return data
    },
    addNote: async (payload:addNoteReq) => {
        const { data } = await request({
            url: '/note/addNote',
            data: {...payload}
        })
        return data
    },
    editNote: async (payload:editNoteReq) => {
        const { data } = await request({
            url: '/note/editNote',
            data: {...payload}
        })
        return data
    },
    removeNote: async (payload:removeNoteReq) => {
        const { data } = await request({
            url: '/note/removeNote',
            data: {...payload}
        })
        return data
    }
} 