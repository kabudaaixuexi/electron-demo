import { defineComponent, inject, onMounted, onUnmounted, reactive, ref, toRefs, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';


export default defineComponent({
  components: {
  },
  setup() {    
    const state = reactive({
       
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