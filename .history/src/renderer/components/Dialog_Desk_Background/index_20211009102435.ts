import { defineComponent, inject, onMounted, onUnmounted, reactive, toRefs, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';
import API from '@renderer/api'

export default defineComponent({
  name: 'dialogDeskBackground',
  props: {
    dialogVisible: Boolean
  },
  async setup(props, context) {
    const state = reactive({
    })
    const reconfirm = () => {
      context.emit('DialogVisible', false)
    }
    {
      const result = await API.getDeskImgList()
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