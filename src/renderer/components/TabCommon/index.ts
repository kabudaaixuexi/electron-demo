import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");

export default defineComponent({
  setup() {
    const state = reactive({
        isReset : true
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