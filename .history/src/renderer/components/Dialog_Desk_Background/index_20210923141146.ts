import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'

export default defineComponent({
  name: 'dialogDeskBackground',
  setup() {
    console.log(122)
    const state = reactive({
      dialogVisible: true
    })

    onMounted(() => {
      console.log(state);
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
    };
  }
});