import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue';

import { ElMessage } from 'element-plus';
import socket from '@renderer/utils/socket'

enum __opt {
  '用户' = 1,
  '聊天'
}
interface FaceIdentity {
  __opt: number,
  __url_default: string,
  data: any
}
const identityList:FaceIdentity[] = [
  {
    __opt: __opt['用户'],
    __url_default: 'http://192.168.5.85:25566/assets/user.jpeg',
    data: null
  },
  {
    __opt: __opt['聊天'],
    __url_default: 'http://192.168.5.85:25566/assets/chat.jpeg',
    data: null
  }
]
export default defineComponent({
  setup() {
    const state = reactive({
      identityList
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