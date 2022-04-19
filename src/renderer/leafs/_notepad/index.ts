import {
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  getCurrentInstance,
} from "vue";
import menuCommon from "@renderer/components/MenuCommon/index.vue";
import dialogLogin from '@renderer/components/DialogLogin/index.vue';
import dialogRegister from '@renderer/components/DialogRegister/index.vue';
import translate from './components/Translate.vue';
import setup from './components/Setup.vue';
import skin from './components/Skin.vue';
import voice from './components/Voice.vue';
import uploadImg from './components/UploadImg.vue';
import fontStyle from './components/FontStyle.vue';
import user from './components/User.vue';
import background from './components/Background.vue';
import weather from './components/Weather.vue';
import { useRouter } from "vue-router";
import { ElMessage, ElLoading, ElNotification } from 'element-plus'
import { listenerDrag, listenerDrop, getVNode, parse,creatEmptyVNode,repaintImg } from "./util";
import { fontNames, fontSizes } from "./config"
import { debounce } from '@renderer/utils/tool'
import API from '@renderer/api'
import moon from "@renderer/store";
const {ipcRenderer} = require("electron");

export default defineComponent({
  components: {
    menuCommon,dialogLogin,dialogRegister,background,weather,translate,setup,voice,fontStyle,uploadImg,user,skin
  },
  setup() {
    const Router = useRouter();
    const state = reactive({
        unlockTitle:'',
        unlockValue:'',
        unlockVisible:false,
      input:'',
      layoutType: 2,
      disabled: true,
      loginDialog: true,
      registerDialog: false,
      noteList: [],
      curNote: null,
      themeStyle: moon.getState('themeStyle'),
      userInfo: null,
      loading: null
    });
    // 修改布局方式
    const layoutChange = (layoutType) => {
        state.layoutType = layoutType
    }
    // 左侧切换
    const noteChange = (e) => {
      if (state.curNote.noteid != e.noteid) {
        removeRender()
        state.curNote = e;
        state.unlockValue = ''
        recoveryRender()
      }
    };
    // 删除编辑区
    const removeRender = () => {
        state.loading = ElLoading.service({
            lock: true,
            // text: 'Loading',
            background: 'rgba(0, 0, 0, 0.4)',
          })
        var self = document.querySelector(`.notepad_sidebar_cont`);
        var parent = document.querySelector(`.notepad_sidebar`);
        self && parent.removeChild(self);
    }
    // 恢复编辑区
    const recoveryRender = () => {
        state.loading?.close()
        state.loading = null
        console.log('恢复编辑区恢复编辑区');
        var parent = document.querySelector(`.notepad_sidebar`);
        console.log(parent,'parent');
        const newVNode = state.curNote ? state.curNote.vNode : creatEmptyVNode()
        console.log(newVNode,'newVNode');
        newVNode._data.contenteditable = !state.curNote?.lock
        parent.appendChild(parse(newVNode))
        listeners()
    }
    // 修改编辑区域
    const changeStyle = (data) => {
        console.log(data);
        data.value
        ? document.execCommand(data.command, false, data.value)
        : document.execCommand(data.command, false, null);
    };

    // 获取笔记列表
    const getNoteList = async (cb = null) => {
        const { data } = await API.getNoteList({
            uid: moon.getState('userInfo').userName
        })
        // console.log(data);
        state.noteList = data
        cb && cb ()
    }
    // 准备修改笔记标题
    const preEditSubtitle = () => {
        state.disabled = false
    }
    
    // 修改笔记加密状态
    const unlockChange = async () => {
        // 没有设置密码的加密
        if (!state.curNote?.lockValue) {
            changeEncryptionSuccess(true, state.unlockValue)
            await API.editNote({
                uid: moon.getState('userInfo').userName,
                noteid: state.curNote.noteid,
                subtitle: state.curNote.subtitle,
                vNode: state.curNote.vNode,
                lock: state.curNote.lock,
                lockValue: state.unlockValue
            })
            ElMessage({
                message: '笔记设置密码成功，不要忘记密码哦～',
                type: 'success',
            })
            state.unlockVisible = false
            return
        }
        // 设置过的走校验
        if (state.curNote.lockValue && state.unlockValue == state.curNote.lockValue) {
            await changeEncryptionSuccess(false)
            ElMessage({
                message: '笔记已解密，可以开始编辑',
                type: 'success',
            })
            state.unlockVisible = false
        } else {
            ElMessage({
                type:'error',
                message: '密码错误，修正后再次确认'
            })
        }
    }
    const changeEncryptionSuccess = async (e, ev = state.curNote.lockValue) => {
        removeRender()
        state.curNote.lock = e
        await API.editNote({
            uid: moon.getState('userInfo').userName,
            noteid: state.curNote.noteid,
            subtitle: state.curNote.subtitle,
            vNode:state.curNote.vNode,
            lockValue: ev,
            lock: e,
        })
        getNoteList(() => {
            state.curNote = state.noteList.filter(i => i.noteid == state.curNote.noteid)[0] || null
            recoveryRender()
        })
    }
    const changeEncryption = async (e) => {
        // 第一次设置密码
        if (!state.curNote.lockValue) {
            state.unlockTitle = '笔记加密'
            state.unlockVisible = true
            return
        }
        // 加密
        if (e) {
            await changeEncryptionSuccess(e)
            ElMessage({
                message: '笔记已加密,不可被编辑',
                type: 'warning',
            })
        } else {
            state.unlockTitle = '解锁笔记'
            state.unlockVisible = true
        }
    }
    // 点击上传添加图片
    const handleExceed = (ev) => {
        !sessionStorage.getItem('count') && sessionStorage.setItem('count','1')
        var self = document.querySelector(`.notepad_sidebar_cont`);
        sessionStorage.getItem('count') == '1' && changeStyle({
            command: 'insertImage',
            value: `${ev.data}`
        })
        // 添加点击事件
        repaintImg(self)
        sessionStorage.setItem('count','2')
        setTimeout(()=> {
            sessionStorage.setItem('count','1')
        })
    }
    // 搜索笔记
    const f = (list, queryString) => {
        const temList = JSON.parse(JSON.stringify(list))
        return temList.map(item => {
            item.content = []
            const getValue = (children) => {
                if (children._value) {
                    item.content.push(children._value)
                }
                if (children.children) {
                   children.children.map(i => {
                        getValue(i)
                   })
                }
            }
            getValue(item.vNode)
            item.value = queryString
            const temB = item.content.join(',')
            const temC = item.content.filter(i => {
                return i.indexOf(queryString) !== -1
            }).join(',')
            item.content = temC ? `<span>${temC.replace(queryString,`<spa style="color:red">${queryString}</spa>`)}</span>` : temB
            if (queryString && item.subtitle.indexOf(queryString) !== -1) {
                item.subtitle = `<spa>${item.subtitle.replace(queryString,`<spa style="color:red">${queryString}</spa>`)}</spa>`
            } else {
                item.subtitle = item.subtitle || '未设置标题'
            }
            return item
        }).filter(i => i.content.indexOf('<spa') !== -1 || i.subtitle.indexOf('<spa>') !== -1)
    }
    
    let timeout:NodeJS.Timeout
    const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(f(state.noteList, queryString))
        }, 3000 * Math.random())
      }
      
    const handleSelect = (item) => {
        noteChange(state.noteList.filter(i=> i.noteid == item.noteid)[0])
    }
    // 修改笔记标题
    const subtitleChange = async (ev) => {
        state.disabled = true
        await API.editNote({
            uid: moon.getState('userInfo').userName,
            noteid: state.curNote.noteid,
            subtitle: ev,
            vNode: state.curNote.vNode,
            lockValue: state.curNote.lockValue,
            lock: state.curNote.lock,
        })
        getNoteList()
    }
    // 修改笔记实时保存
    const editNote = async (ev) => {
        if (!state.curNote) return
        await API.editNote({
            uid: moon.getState('userInfo').userName,
            noteid: state.curNote.noteid,
            subtitle: state.curNote.subtitle,
            vNode: ev,
            lock: state.curNote.lock,
            lockValue: state.curNote.lockValue,
        })
        getNoteList(() => {
            state.curNote = state.noteList.filter(i => i.noteid == state.curNote.noteid)[0] || null
        })
    }
    // 新增笔记
    const addNote = async () => {
        removeRender()
        const { data } = await API.addNote({
            uid: moon.getState('userInfo').userName,
            vNode: creatEmptyVNode(),
            subtitle: '',
            lockValue: '',
            lock: false
        })
        getNoteList(() => {
            state.curNote = state.noteList[0] || null
            recoveryRender()
        })
    }
    // 删除笔记
    const removeNote = async () => {
        removeRender()
        if (!state.curNote) return
        const { data } = await API.removeNote({
            uid: moon.getState('userInfo').userName,
            noteid: state.curNote.noteid,
        })
        let index = 0
        state.noteList.map((i,ind) => {
            if (state.curNote.noteid == i.noteid) {
                index = ind == 0 ? 1 : ind
            }
        })
        getNoteList(() => {
            state.curNote = state.noteList[index - 1] || null
            recoveryRender()
        })
    }
    // 监听修改
    const listeners = () => {
        console.log('添加一些监听事件');
        const EditedDom = document.querySelector(`.notepad_sidebar_cont`);
        EditedDom.addEventListener("input", debounce((ev) => {
          editNote(getVNode(ev.target));
        }, 300, false)
        );
        repaintImg(EditedDom)
        listenerDrop(EditedDom);
        listenerDrag();
    }
    // 监听键盘
    const ipcRendererListeners = () => {
        ipcRenderer.on('CommandOrControl+C', (event) => {
            console.log('CommandOrControl+C')
            changeStyle({
                command: 'copy'
            })
        })
        ipcRenderer.on('CommandOrControl+V', async (event) => {
            console.log('CommandOrControl+V')
            const text = await window.navigator.clipboard.readText()
            if (moon.getState('choice') === '粘贴全部信息') {
                changeStyle({
                    command: 'paste'
                }) 
            } else {
                await window.navigator.clipboard.writeText(text)
                changeStyle({
                    command: 'paste'
                }) 
            }
        })
        ipcRenderer.on('CommandOrControl+X', (event) => {
            console.log('CommandOrControl+X')
            changeStyle({
                command: 'cut'
            })
        })
        ipcRenderer.on('CommandOrControl+A', (event) => {
            console.log('CommandOrControl+A')
            changeStyle({
                command: 'selectAll'
            })
        })
        ipcRenderer.on('CommandOrControl+Z', (event) => {
            console.log('CommandOrControl+Z')
            changeStyle({
                command: 'undo'
            })
        })
        ipcRenderer.on('CommandOrControl+P', (event) => {
            console.log('CommandOrControl+P')
            if (window.getSelection().toString()) {
                ElNotification({
                    title: '查询信息',
                    message: `${window.getSelection().toString()}`,
                })
                ipcRenderer.invoke("open-win", { url: window.getSelection().toString(), title: window.getSelection().toString(), network: true });
            }
        })
    }
    moon.watch('userInfo', (new_val,old_val)=>{
      state.userInfo = new_val
      removeRender()
      setTimeout(() => {
          if (moon.getState('userInfo')) {
              getNoteList(()=>{
                  state.curNote = state.noteList[0] || null
                  recoveryRender()
               })
          } else {
              recoveryRender()
          }
      })
    })
    onMounted(() => {
      moon.watch('themeStyle', (ne, ol) => (state.themeStyle = ne))
      ipcRendererListeners()
    });
    onUnmounted(() => {
        window.removeEventListener('keyup',()=>{})
    });
    // 登录
    const changeLoginDialog = (e) => {
        state['registerDialog'] = false
        state['loginDialog'] = e
    }
    const unLogin = () => {
        moon.setState(null,'userInfo')
        state['loginDialog'] = true
    }
    // 注册
    const changeRegisterDialog = (e) => {
        state['loginDialog'] = false
        state['registerDialog'] = e
    }
    // 看一眼密码
    const concealClick = () => {
        ElMessage({
            message: `密码是 ${state.curNote.lockValue} ，别再忘了`,
            type: 'warning',
        })
    }
    return {
      ...toRefs(state),
      noteChange,
      changeStyle,
      unLogin,unlockChange,handleSelect,querySearchAsync,layoutChange,handleExceed,changeLoginDialog,changeRegisterDialog,addNote,removeNote,subtitleChange,preEditSubtitle,changeEncryption,concealClick,
      fontNames,fontSizes
    };
  },
});
