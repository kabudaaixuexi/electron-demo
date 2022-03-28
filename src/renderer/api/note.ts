import request from '@renderer/utils/request'
import translate from './translate'
import {getNoteListReq,addNoteReq,editNoteReq,removeNoteReq } from './type'
export default {
    /** 获取笔记列表 */
    getNoteList:async (payload:getNoteListReq) => {
        const { data } = await request({
            url: '/note/getNoteList',
            data: {...payload}
        })
        return data
    },
    /** 添加笔记 */
    addNote: async (payload:addNoteReq) => {
        const { data } = await request({
            url: '/note/addNote',
            data: {...payload}
        })
        return data
    },
    /** 编辑笔记 */
    editNote: async (payload:editNoteReq) => {
        const { data } = await request({
            url: '/note/editNote',
            data: {...payload}
        })
        return data
    },
    /** 删除笔记 */
    removeNote: async (payload:removeNoteReq) => {
        const { data } = await request({
            url: '/note/removeNote',
            data: {...payload}
        })
        return data
    },
    ...translate
} 