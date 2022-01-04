import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
const { ipcRenderer } = require("electron");

export default defineComponent({
  setup() {
    const state = reactive({
        isReset : true,
        open:false
    })
    const menuChange = () =>{
      state.open = !state.open
    }
    const Router = useRouter()
    const RouterTo = (path) => {
      Router.push({
        path
      })
    }
    onMounted(() => {

    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
      menuChange,
      RouterTo
    };
  }
});