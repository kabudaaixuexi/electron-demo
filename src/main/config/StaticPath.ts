// 这里定义了静态文件路径的位置
import { join } from 'path'
import { DllFolder, HotUpdateFolder } from '@config/index'

if (process.env.NODE_ENV !== 'development') {
  process.env.__static = join(__dirname, '..', 'renderer').replace(/\\/g, '\\\\')
  process.env.__lib = join(__dirname, '..', '..', '..', '..', `${DllFolder}`).replace(/\\/g, '\\\\')
  process.env.__updateFolder = join(__dirname, '..', '..', '..', '..', `${HotUpdateFolder}`).replace(/\\/g, '\\\\')
} else {
  process.env.__static = join(__dirname, '..', '..', '..', 'static').replace(/\\/g, '\\\\')
  process.env.__updateFolder = join(__dirname, '..', '..', '..', `${HotUpdateFolder}`).replace(/\\/g, '\\\\')
  process.env.__lib = join(__dirname, '..', '..', '..', `${DllFolder}`).replace(/\\/g, '\\\\')
}
export const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}` : `file://${join(__dirname, '..', 'renderer', 'index.html')}`
export const loadingURL = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT}/loader.html` : `file://${process.env.__static}/loader.html`
export const lib = process.env.__lib
export const updateFolder = process.env.__updateFolder
export const nestAssetsUrl = process.env.NODE_ENV === 'development' ? `static` : join(__dirname, '..', 'renderer').replace(/\\/g, '\\\\')
// 写入聊天日志的地址
export const nestRecordChatUrl = process.env.NODE_ENV === 'development' ? `static/recordlog` : join(__dirname, '..', 'renderer/recordlog').replace(/\\/g, '\\\\')
// 写入笔记的地址
export const nestRecordNoteUrl = process.env.NODE_ENV === 'development' ? `static/notelog` : join(__dirname, '..', 'renderer/notelog').replace(/\\/g, '\\\\')
export const nestEnginesUrl = process.env.NODE_ENV === 'development' ? `static` : join(__dirname, '..', 'renderer').replace(/\\/g, '\\\\')