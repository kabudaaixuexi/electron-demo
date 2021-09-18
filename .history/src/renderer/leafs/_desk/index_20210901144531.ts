import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
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
        isReset : true
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
            break;
          default:;
        }
    });
    function deskIClick(params:any) {
      ElMessage({
        type: "success",
        message: "已关闭",
      });
    }
    onMounted(() => {
      const els:any = document.getElementsByClassName('Eldrag')
      Array.from(els).map((el:HTMLElement) => { useMove(el, els)})
    })
    onUnmounted(() => { 
        // menuListenersRemove()
    })
    return { 
      MenuDom,
      deskIClick,
      faceList,
      ...toRefs(state)
    };
  }
});