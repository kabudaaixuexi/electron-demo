import { app, ipcMain, dialog, BrowserWindow, globalShortcut } from 'electron'
import { winURL } from '../config/StaticPath'
import { updater } from './HotUpdater'

export default {
  Mainfunc(mainWindow: BrowserWindow, IsUseSysTitle: Boolean) {
    ipcMain.handle('IsUseSysTitle', async () => {
      return IsUseSysTitle
    })
    ipcMain.handle('windows-mini', () => {
      mainWindow.minimize()
    })
    ipcMain.handle('window-max', async () => {
      if (mainWindow.isMaximized()) {
        mainWindow.restore()
        return { status: false }
      } else {
        mainWindow.maximize()
        return { status: true }
      }
    })
    ipcMain.handle('window-close', () => {
      mainWindow.close()
    })
    ipcMain.handle('open-messagebox', async (event, arg) => {
      const res = await dialog.showMessageBox(mainWindow, {
        type: arg.type || 'info',
        title: arg.title || '',
        buttons: arg.buttons || [],
        message: arg.message || '',
        noLink: arg.noLink || true
      })
      return res
    })
    ipcMain.handle('open-errorbox', (event, arg) => {
      dialog.showErrorBox(
        arg.title,
        arg.message
      )
    })
    ipcMain.handle('hot-update', (event, arg) => {
      updater(mainWindow)
    })
    ipcMain.handle('open-win', (event, arg) => {
      console.log(arg);

      const ChildWin = new BrowserWindow({
        title: `${arg.title}` || `有疑问联系kaburda.163.com`,
        height: 595,
        useContentSize: true,
        width: 842,
        autoHideMenuBar: true,
        minWidth: 842,
        titleBarStyle: arg.titleBarStyle || 'default',
        show: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webSecurity: false,
          enableRemoteModule: true,
          // 如果是开发模式可以使用devTools
          devTools: process.env.NODE_ENV === 'development',
          // devTools: true,
          // 在macos中启用橡皮动画
          scrollBounce: process.platform === 'darwin'
        }
      })
      // 修复快捷键
      app.on('browser-window-focus', () => {
        console.log('electron获取焦点');
        globalShortcut.register('CommandOrControl+C', () => {
          // Do stuff when Y and either Command/Control is pressed.
          ChildWin.webContents.send('CommandOrControl+C')
        })
        globalShortcut.register('CommandOrControl+V', () => {
          // Do stuff when Y and either Command/Control is pressed.
          ChildWin.webContents.send('CommandOrControl+V')
        })
        globalShortcut.register('CommandOrControl+X', () => {
          // Do stuff when Y and either Command/Control is pressed.
          ChildWin.webContents.send('CommandOrControl+X')
        })
        globalShortcut.register('CommandOrControl+A', () => {
          // Do stuff when Y and either Command/Control is pressed.
          ChildWin.webContents.send('CommandOrControl+A')
        })
        globalShortcut.register('CommandOrControl+Z', () => {
          // Do stuff when Y and either Command/Control is pressed.
          ChildWin.webContents.send('CommandOrControl+Z')
        })
      })
      app.on('browser-window-blur', () => {
        console.log('electron失去焦点');
        globalShortcut.unregisterAll()
      })
      // ChildWin.blur = () => {
      //   globalShortcut.unregisterAll()
      // }
      // ChildWin.close = () => {
      //   globalShortcut.unregisterAll()
      // }
      // 如果是网络路径直接打开即可
      if (arg.url.indexOf('http') !== -1) {
        ChildWin.loadURL(arg.url)
      } else {
        ChildWin.loadURL(winURL + `#${arg.url}`)
      }
      ChildWin.webContents.once('dom-ready', () => {
        ChildWin.show()
        // 由于渲染进程可能会加载缓慢，所以在这里，加一个延迟，等一等渲染进程
        setTimeout(() => {
          ChildWin.webContents.send('send-data-test', arg.sendData)
        }, 1000)
        if (arg.IsPay) {
          // 检查支付时候自动关闭小窗口
          const testUrl = setInterval(() => {
            const Url = ChildWin.webContents.getURL()
            if (Url.includes(arg.PayUrl)) {
              ChildWin.close()
            }
          }, 1200)
          ChildWin.on('close', () => {
            clearInterval(testUrl)
          })
        }
      })
    })
  }
}
