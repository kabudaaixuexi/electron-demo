const { ipcRenderer } = require("electron");
/**
 * 获取全局参数
 * @param key 键
 */
export function getGlobal<T>(key: string): T {
    return ipcRenderer.sendSync('global-sharedObject-get', key);
}