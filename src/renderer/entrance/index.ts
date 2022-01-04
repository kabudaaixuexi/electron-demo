import { defineComponent, onMounted,reactive,toRefs } from "vue";
import menuCommon from "@renderer/components/MenuCommon/index.vue"
import { useRoute, useRouter } from 'vue-router'
// import { keepAliveData } from '@renderer/store';


export default defineComponent({
  components: {
    menuCommon
  },
  setup() {
    const state = reactive({
    })
    
    onMounted(() => {
      console.log("onMounted");
    });
    return {
        ...toRefs(state),
        route:useRoute()
    };
  },
});
