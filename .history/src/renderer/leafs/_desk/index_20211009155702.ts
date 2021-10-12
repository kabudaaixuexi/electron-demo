import { defineComponent, inject, onMounted, onUnmounted, reactive, ref, toRefs, getCurrentInstance } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'
// components
import API from '@renderer/api'
type elType = 0 | 1 | 2 | 3
interface DeskFaceList {
    icon: string
    explain: string
    eltype: elType
}
const faceList:DeskFaceList[] = 
[
  {
    icon: 'https://img2.baidu.com/it/u=3199979532,3289857039&fm=26&fmt=auto&gp=0.jpg',
    explain: '聊吗',
    eltype: 0
  },
  {
    icon: 'https://img2.baidu.com/it/u=3199979532,3289857039&fm=26&fmt=auto&gp=0.jpg',
    explain: 'Be',
    eltype: 0
  },
  {
    icon: 'https://img2.baidu.com/it/u=3199979532,3289857039&fm=26&fmt=auto&gp=0.jpg',
    explain: 'Try',
    eltype: 0
  },
  {
    icon: 'https://img2.baidu.com/it/u=3199979532,3289857039&fm=26&fmt=auto&gp=0.jpg',
    explain: 'Coo',
    eltype: 0
  }
]


export default defineComponent({
  components: {
  },
  setup() {    
    const state = reactive({
        isReset: true,
        deskConfig: {
          showDesk: false,
          queueList: []
        },
        deskBackground: 'http://192.168.5.85:25566/resources/desk/_desk.jpeg'
    })
    const changeBgDialog = (e) => {
      // state['bgDialog'] = e
    }
    function MenuDom(element: HTMLElement) {
        if (!element) return;
        element.oncontextmenu = () => {
            menuShow('desk');
        };
    }
    menuOn(async (event, args) => {
        switch (args) {
          case 'desk-1':
            let els:any = document.getElementsByClassName('Eldrag')
            useMove(null, els, true)
            break;
          case 'desk-2':
            let newEls:any = document.getElementsByClassName('Eldrag');let temEls:any[] = []
            Array.from(newEls).map(_item => { 
              temEls.push({
                      x:(<any>_item).offsetLeft + parseInt((<any>getComputedStyle((<any>_item)))['margin-left']),
                      y:(<any>_item).offsetTop + parseInt((<any>getComputedStyle((<any>_item)))['margin-right'])
                  })
              })
            sessionStorage.setItem('ELS',JSON.stringify(temEls))
            break;
          case 'desk-3':
            const { data } = await API.getDeskImgList({
              type: 'desk'
            })
            state['deskConfig'].queueList = data
            state['deskConfig'].showDesk = true
            break;
          default:;
        }
    });
    const submitUpload = () => {
        const upload = document.querySelector('#upload')
        console.log(upload);
        
        // upload.submit()
    }
    const openClick = async (v: any) => {
      socket.emit('identity', {name:'hey'})
      ipcRenderer.invoke("open-win", { url: "/chat", title: v.explain});
    }
    onMounted(() => {
      const els:any = document.getElementsByClassName('Eldrag')
      Array.from(els).map((el:HTMLElement) => { useMove(el, els)})
    })
    onUnmounted(() => { 
        menuListenersRemove()
    })
    return { 
      MenuDom,
      openClick,submitUpload,
      faceList,
      ...toRefs(state)
    };
  }
});