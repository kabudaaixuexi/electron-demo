import { defineComponent, inject, onMounted, onUnmounted, reactive, ref, toRefs, getCurrentInstance } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'
import { useRouter } from 'vue-router'
import {programItem } from './type'
import { programList } from './config'
// components
import API from '@renderer/api'

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
        deskBackground: 'http://localhost:25566/resources/desk/_desk.jpeg'
    })
    const Router = useRouter()
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
            uploadUpdate()
            state['deskConfig'].showDesk = true
            break;
            case 'desk-4':
              Router.push({
                path:'/'
              })
            break;
          default:;
        }
    });
    const uploadUpdate = async () => {
      const { data } = await API.getDeskImgList({
        type: 'desk'
      })
      state['deskConfig'].queueList = data.reverse()
    }
    const uploadSuccess = () => {
      ElMessage({ type: "success", message: "上传成功" });
      uploadUpdate()
    }
    const changeBG = (e) => {
      state.deskBackground = e
    }
    const openClick = async (el: programItem) => {
      const { programPath: url, explain: title, titleBarStyle } = el
      ipcRenderer.invoke("open-win", { url, title,titleBarStyle});
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
      openClick,uploadSuccess,changeBG,
      programList,
      ...toRefs(state)
    };
  }
});