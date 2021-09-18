import { defineComponent, h, onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'
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
    explain: 'I Will',
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
  setup() {
    const state = reactive({
        isReset : true,
        deskBackground: ``
    })
    function MenuDom(element: HTMLElement) {
        if (!element) return;
        element.oncontextmenu = () => {
            menuShow('desk');
        };
    }
    menuOn((event, args) => {
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
            var styleSheetObject = document.querySelector('#desk')
            console.log(styleSheetObject.sheet);
            
            // console.log(styleSheetObject.sheet.cssRules[beforeIndex])
            break;
          default:;
        }
    });
    async function deskIClick(params:any) {
      const result = await API.getDeskImgList()
          console.log(result,111);
      socket.emit('identity', {name:'hey'})
    }
    const openClick = () => {
      ipcRenderer.invoke("open-win", { url: "/chat" });
    }
    onMounted(() => {
      const els:any = document.getElementsByClassName('Eldrag')
      Array.from(els).map((el:HTMLElement) => { useMove(el, els)})

      setTimeout(()=>{
        ipcRenderer.invoke("start-server").then((res) => {
          ElMessage({
            type: "success",
            message: "nest服务已开启",
          });
        });
      })
    })
    onUnmounted(() => { 
        // menuListenersRemove()
    })
    return { 
      MenuDom,
      deskIClick,
      openClick,
      faceList,
      ...toRefs(state)
    };
  }
});