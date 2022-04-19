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
import { filterUser } from "@renderer/utils/tool";
import API from '@renderer/api'

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
        userName: "",
        passWord: "",
		    photo: "",
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
          { required: true, message: "不妨夸自己两句～", trigger: "blur" },
        ],
      },
    });
    const handleExceed = (ev: { data: any; }) => {
      state.ruleForm.photo = ev.data
    }
    const chatRegister = async () => {
      await ruleFormRef.value.validate((valid: any, fields: any) => {
        if (valid) {
			const data: any = {
				...state.ruleForm,
				extData: JSON.stringify({
					desc: state.ruleForm.desc
				})
			}
			delete data.desc
			API.postRegister(data).then(res => {
				if(res.statusCode == 200) {
					ElMessage({
						type:'success',
						message:"注册成功"
					})
					moon.setState(res, 'userInfo')
					window.localStorage.setItem('userInfo', filterUser(data, 0) || '')
					state.ruleForm = {
						userName: "",
						passWord: "",
						photo: "",
						desc: "",
					}
					props.changeRegisterDialog(false)
				}
			})
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    onMounted(() => {
    });
    onUnmounted(() => {});
    return {
      ...toRefs(state),
      ruleFormRef,
      chatRegister,handleExceed
    };
  },
});
