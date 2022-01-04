import {
    BrowserWindow,
    ipcMain,
    Menu,
    nativeImage,
    MenuItem,
    MenuItemConstructorOptions
} from 'electron';
// import { join } from 'path';
//   import csh from '@/lib/assets/icon/csh.png';

ipcMain.on('menu-show-head', (event, menutype) => {
    const template: Array<MenuItemConstructorOptions | MenuItem> = [
        {
            label: '自定义1',
            // icon: nativeImage.createFromPath(join(__dirname, `../${testIcon}`)),
            click: () => {
                event.sender.send('menu-back', 'menu-item-1');
            }
        },
        { label: '自定义2', type: 'checkbox', checked: true }
    ];
    const menu = Menu.buildFromTemplate(template);
    menu.popup({
        window: BrowserWindow.fromWebContents(event.sender)
    });
});

ipcMain.on('menu-show-desk', (event, menutype) => {
    const template: Array<MenuItemConstructorOptions | MenuItem> = [
        {
            label: '复原桌面',
            // icon: nativeImage.createFromPath(join(__dirname, `../${csh}`)),
            click: () => {
                event.sender.send('menu-back', 'desk-1');
            }
        },
        {
            label: '保存当前桌面排列',
            // icon: nativeImage.createFromPath(join(__dirname, `../${csh}`)),
            click: () => {
                event.sender.send('menu-back', 'desk-2');
            }
        },
        {
            label: '更改桌面背景...',
            // icon: nativeImage.createFromPath(join(__dirname, `../${csh}`)),
            click: () => {
                event.sender.send('menu-back', 'desk-3');
            }
        },
        {
            label: '返回微前端模式',
            // icon: nativeImage.createFromPath(join(__dirname, `../${csh}`)),
            click: () => {
                event.sender.send('menu-back', 'desk-4');
            }
        }
    ];
    const menu = Menu.buildFromTemplate(template);
    menu.popup({
        window: BrowserWindow.fromWebContents(event.sender)
    });
});
