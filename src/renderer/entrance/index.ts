import { defineComponent, onMounted,reactive,toRefs } from "vue";
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: {
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
