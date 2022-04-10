import { defineComponent, inject, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'
import moon from '@renderer/store'


export default defineComponent({
  name: 'dialogLogin',
  props: {
    dialogVisible: Boolean
  },
  setup(props, context) {
    const state = reactive({
      value: null,
      password: null,
      restaurants:[
        {value: 'Root', password: 'currency123'},
        {value: 'LixPabor', password: 'currency123'},
        {value: 'Administrator', password: 'currency123'},
        {value: 'Spare01', password: 'currency123'},
        {value: 'Spare02', password: 'currency123'},
        {value: '灰太狼气球', password: 'currency123'},
        {value: '尤达大师', password: 'currency123'},
        {value: '麻油百香果', password: 'Fullstack123'},
      ]
    })
    const querySearch = (queryString: string, cb) => {
      const results = queryString
        ? state.restaurants.filter(createFilter(queryString))
        : state.restaurants
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const handleSelect = (item) => {
      // state.password = item.password
    }
    const chatLogin = () => {
      if (!state.restaurants.find(ev => state.value == ev.value)) {
        ElMessage({
          type:'error',
          message:"只能使用默认账号名称登录！"
        })
        return
      } else if (state.restaurants.find(ev => state.value == ev.value).password != state.password) {
        ElMessage({
          type:'error',
          message:"密码不正确！"
        })
        return
      }
      moon.$_set({
        uid: state.value,
        password: state.password,
        arturl: 'https://himg.bdimg.com/sys/portrait/item/wise.1.34e37c47.mffK6OgXuMmfRzKuI7flGw.jpg?time=3667'
      }, 'userInfo')
      // console.log(moon.$_getData(),'llll');
      
      const temU = state.restaurants.filter(i => {
        return state.value == i.value
      })
      if (temU.length) {
        context.emit('DialogVisible', false)
      } else {
        ElMessage({
          type:'error',
          message:"只能使用默认账号名称登录！"
        })
      }
    }
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
      querySearch, handleSelect,chatLogin
    };
  }
});