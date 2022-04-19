import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
} from "vue";
import useMove from "@renderer/mixins/drag";
import { menuShow, menuOn, menuListenersRemove } from "@renderer/config/menu";
import { ElMessage } from "element-plus";
const { ipcRenderer } = require("electron");
import socket from "@renderer/utils/socket";
import moon from "@renderer/store";
import { setCookie, getCookie } from "@renderer/utils/tool";

export default defineComponent({
  name: "dialogRegister",
  props: {
    dialogVisible: Boolean,
    changeRegisterDialog: Function,
    changeLogin: Function,
  },
  setup(props, context) {
    const ruleFormRef: any = ref();
    const state = reactive({
      ruleForm: {
        useNname: "",
        passWord: "",
        desc: "",
      },
      rules: {
        useNname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          {
            min: 1,
            max: 12,
            message: "昵称长度不能超过12个字节",
            trigger: "blur",
          },
        ],
        passWord: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "change",
          },
        ],
        desc: [
          { required: true, message: "务必夸自己两句～", trigger: "blur" },
        ],
      },
    });
    // const resetForm = (formEl: any) => {
    //     if (!formEl) return
    //     formEl.resetFields()
    //   }
    const chatRegister = async () => {
      console.log("注册");
      console.log(ruleFormRef);

      await ruleFormRef.value.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
      //   moon.setState({
      //     uid: state.value,
      //     password: state.password,
      //     arturl: state.restaurants.find(ev => ev.value == state.value).arturl
      //   }, 'userInfo')
      //   setCookie('uid', state.value, 10)
      //   setCookie('password', state.password, 10)
      //   setCookie('arturl', encodeURI(state.restaurants.find(ev => ev.value == state.value).arturl), 10)

      //   const temU = state.restaurants.filter(i => {
      //     return state.value == i.value
      //   })
      //   if (temU.length) {
      //     context.emit('DialogVisible', false)
      //   } else {
      //     ElMessage({
      //       type:'error',
      //       message:"只能使用默认账号名称登录！"
      //     })
      //   }
    };
    onMounted(() => {
      //   if (getCookie('uid') && getCookie('password')) {
      //     moon.setState({
      //       uid: getCookie('uid'),
      //       password: getCookie('password'),
      //       arturl: decodeURI(getCookie('arturl'))
      //     }, 'userInfo')
      //     context.emit('DialogVisible', false)
      //   }
    });
    onUnmounted(() => {});
    return {
      ...toRefs(state),
      ruleFormRef,
      chatRegister,
    };
  },
});
