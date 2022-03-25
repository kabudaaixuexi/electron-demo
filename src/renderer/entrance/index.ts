import { defineComponent, onMounted,reactive,toRefs } from "vue";
import { useRoute, useRouter } from 'vue-router'
// import { keepAliveData } from '@renderer/store';
// import moon from '../test/index'
import moon from '@renderer/store'

export default defineComponent({
  components: {
  },
  setup() {
    const state = reactive({
    })
    // moon.$_watch('userInfo',(new_val,old_val)=>{
    //   console.log(new_val,'new_val');
    //   console.log(old_val,'old_val')
    //   console.log('app.vue')
    // }, true)
    // moon.$_watch('publicPath',(new_val,old_val)=>{
    //   console.log(new_val,'new_val');
    //   console.log(old_val,'old_val')
    // }, true)
    onMounted(() => {
      // setTimeout(()=>{
      //   moon.$_set({
      //     userInfo: {
      //         name: '123456789'
      //     }
      //   })
      // },1000)
      console.log("onMounted");
    });
    return {
        ...toRefs(state),
        route:useRoute()
    };
  },
});
