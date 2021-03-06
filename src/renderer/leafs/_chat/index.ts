import { defineComponent, nextTick, ref, onMounted, onUnmounted, reactive, toRefs, inject, computed } from 'vue';
import dialogLogin from '@renderer/components/DialogLogin/index.vue';
import { ElMessage } from 'element-plus';
import socket from '@renderer/utils/socket'
import moon from '@renderer/store'

enum __opt {
  '用户' = 1,
  '聊天'
}
enum __source {
  '聊天室1' = '聊天室1',
  '聊天室2' = '聊天室2'
}
enum __status {
  '有新消息' = 1,
  '无新消息',
  '开启状态',
  '关闭状态'
}
interface FaceIdentity {
  __opt: number,
  __url_default: string,
  __class: string,
  __describe?: string,
  data: any
}
interface FaceChatroom {
  __source: string,
  __url_default: string,
  __status: number,
  __latest: any,
  data: any
}
const identityList:FaceIdentity[] = [
  {
    __opt: __opt['聊天'],
    __url_default: 'http://localhost:25566/assets/chat.png',
    __class: 'identity_chat',
    __describe: '聊天',
    data: {}
  }
]
const chatroomList:FaceChatroom[] = [
  {
    __source: __source['聊天室1'],
    __url_default: 'https://oscimg.oschina.net/oscnet/up-f437485f9201a6636750c8d7b4b17a50.jpg!/both/50x50',
    __status: __status['关闭状态'],
    __latest: {},
    data: []
  },
  {
    __source: __source['聊天室2'],
    __url_default: 'https://oscimg.oschina.net/oscnet/up-f437485f9201a6636750c8d7b4b17a50.jpg!/both/50x50',
    __status: __status['关闭状态'],
    __latest: {},
    data: []
  }
]
export default defineComponent({
  components:{
    dialogLogin
  },
  setup() {
    const state = reactive({
      loginDialog: true,
      //
      identityList,
      chatroomList,
      currentRoomIndex: 0,
      newInput:'',
      messageList: [],
      currentanimeid: null,
      //
      userInfo: moon.getState('userInfo')
    })
    console.log(moon,'moon');
    
    moon.watch('userInfo',(new_val,old_val)=>{
      console.log(new_val,'new_val-userInfo');
      console.log(old_val,'old_val-userInfo')
      console.log('chat')
      state.userInfo = new_val
    })
    const currentRoom:any = computed(()=>{
      return state.chatroomList[state.currentRoomIndex];
    })

    const sendNew = () => {
      if (state.newInput === '') { return }
      socket.emit('chatToServer', { __sender: state.userInfo['uid'], __message: {
        __type: 'text',
        __conn: state.newInput,
        __nnew: true
      }, __source: currentRoom.value.__source });
      state.newInput = ''
      document.getElementsByClassName('specific_con')[0].scrollHeight > (400 - 24) && scrollBottom()
    }
    const changeSource = (i) => {
      if (i === state.currentRoomIndex) { return }
      state.newInput = ''
      state.chatroomList[i].data.map(v => {
        v.__message.__nnew = false
      })
      state.chatroomList[state.currentRoomIndex].data.map(v => {
        v.__message.__nnew = false
      })
      state.currentRoomIndex = i
      // setTimeout(()=> {
      //   state.currentanimeid = currentRoom.value['data'][currentRoom.value['data'].length - 1].__message.__conn 
      // },50)
      state.currentanimeid = null
      scrollBottom()
    }
    const scrollBottom = () => {
      setTimeout(() => {
        document.getElementsByClassName('specific_con')[0].scrollTop = document.getElementsByClassName('specific_con')[0].scrollHeight
      }, 50)
    }
    onMounted(() => {
      socket.on('chatToClient', (data) => {
        console.log(data, '消息来了');
        if (data.__sender === state.userInfo['uid']) { data.__message.__nnew = false }
        state.chatroomList.forEach((v) => {
          if (v.__source === data.__source) {v.__latest = data.__message}
        })
        console.log(state.chatroomList);
        state.chatroomList.map(v => {
          if (v.__source === data.__source) {
            state.currentanimeid = data.__message.__conn
            v.data.push(data)
            scrollBottom()
          }
        })
        // 去掉提示
        setTimeout(() => {
          state.chatroomList[state.currentRoomIndex].data.map(v => {
            v.__message.__nnew = false
          })
        },2000)
      })

      socket.on('connect',()=> {
        
      })

      socket.on('joinRoom',(state)=>{
        ElMessage({ type: "success", message: `${state.__sender}加入房间${state.__source}` });
        console.log(state, 'joinRoom');
      })

      socket.on('leaveRoom',(state)=>{
        ElMessage({ type: "error", message: `${state.__sender}退出房间${state.__source}` });
        console.log(state, 'leaveRoom');
      })
    })
    onUnmounted(() => {
      // 全部离开
      state.chatroomList.map(v => {
        socket.emit('leaveRoom', { __sender: state.userInfo['uid'], __source: v.__source });
      })
    })
    const changeLoginDialog = (e) => {
      if (!e) {
        // 全部加入
        state.chatroomList.map(v => {
          socket.emit('joinRoom', { __sender: state.userInfo['uid'], __source: v.__source });
        })
      }
      state['loginDialog'] = e
    }
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),currentRoom,
      sendNew,changeSource,changeLoginDialog
    };
  }
});