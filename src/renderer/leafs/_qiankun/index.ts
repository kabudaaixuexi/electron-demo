import { defineComponent, inject, onMounted, onUnmounted, reactive, ref, toRefs, getCurrentInstance } from 'vue';
import menuCommon from "@renderer/components/MenuCommon/index.vue"
import { useRouter } from 'vue-router'


export default defineComponent({
  components: {
    menuCommon
  },
  setup() {    
    const Router = useRouter()
    const state = reactive({
       
    })
    Router.push({
      path:'/qiankun/sub-react'
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