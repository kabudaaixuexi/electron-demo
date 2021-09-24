import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue';

import { ElMessage } from 'element-plus';
import socket from '@renderer/utils/socket'

enum __opt {
  '用户' = 1,
  '聊天'
}
enum __source {
  '聊天室1' = 'hut1',
  '聊天室2' = 'hut1'
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
  __status: number
}
const identityList:FaceIdentity[] = [
  {
    __opt: __opt['用户'],
    __url_default: 'http://192.168.5.85:25566/assets/user.png',
    __class: 'identity_user',
    __describe: '',
    data: {}
  },
  {
    __opt: __opt['聊天'],
    __url_default: 'http://192.168.5.85:25566/assets/chat.png',
    __class: 'identity_chat',
    __describe: '聊天',
    data: {}
  }
]
const chatroomList:FaceChatroom[] = [
  {
    __source: __source['聊天室1'],
    __status:
  }
]
export default defineComponent({
  setup() {
    const state = reactive({
      identityList,
      chatroomList
    })
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state)
    };
  }
});