import {
    ipcMain
} from 'electron';
type Obj<Value> = {} & {
    [key: string]: Value | Obj<Value>;
};
//获取(sharedObject)
ipcMain.on('global-sharedObject-get', (event, key) => {
    event.returnValue = getGlobal(key);
});

function getGlobal<Value>(key: string): Value | undefined {
    if (key === '') {
      console.error('Invalid key, the key can not be a empty string');
      return;
    }
    if (!key.includes('.') && Object.prototype.hasOwnProperty.call(this.sharedObject, key)) {
      return this.sharedObject[key] as Value;
    }
    const levels = key.split('.');
    let cur = this.sharedObject;
    for (const level of levels) {
      if (Object.prototype.hasOwnProperty.call(cur, level)) {
        cur = cur[level] as unknown as Obj<Value>;
      } else {
        return;
      }
    }
    return cur as unknown as Value;
  }