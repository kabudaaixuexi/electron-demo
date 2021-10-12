import { defineComponent, inject, onMounted, onUnmounted, reactive, toRefs, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';
import API from '@renderer/api'

export default defineComponent({
  name: 'dialogDeskBackground',
  props: {
    dialogVisible: Boolean
  },
  setup(props, context) {
    const state = reactive({
    })
    const reconfirm = () => {
      context.emit('DialogVisible', false)
    }
    
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
      reconfirm
    };
  }
});