import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'

export default defineComponent({
  setup() {
    const state = reactive({
      dialogVisible: true
    })

    onMounted(() => {

    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
      handleClose
    };
  }
});