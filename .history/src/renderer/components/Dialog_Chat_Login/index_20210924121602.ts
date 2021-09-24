import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'

export default defineComponent({
  name: 'dialogDeskBackground',
  props: {
    dialogVisible: Boolean
  },
  setup(props) {
    const state = reactive({
    })
    onMounted(() => {
      console.log(props);
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
    };
  }
});