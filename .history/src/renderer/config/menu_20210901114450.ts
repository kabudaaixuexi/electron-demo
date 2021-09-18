import { IpcRendererEvent, ipcRenderer } from 'electron';

/**
 * 打开menu
 */
export function menuShow(menutype:string) {
    ipcRenderer.send(`menu-show-${menutype}`);
}

/**
 * menu 监听反馈
 */
export function menuOn(listener: (event: IpcRendererEvent, args: any) => void) {
    ipcRenderer.on('menu-back', listener);
}

/**
 * menu 关闭监听
 */
export function menuListenersRemove() {
    ipcRenderer.removeAllListeners('menu-back');
}
