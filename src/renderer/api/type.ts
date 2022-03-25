export interface getNoteListReq {
    uid: string // 用户id
}
export interface addNoteReq {
    uid: string
    subtitle: string
    vNode: any
    lock: boolean
    lockValue: string | number
}
export interface editNoteReq {
    uid: string
    subtitle: string
    noteid: string
    vNode: any
    lock: boolean
    lockValue: string | number
}
export interface removeNoteReq {
    uid: string
    noteid: string
}