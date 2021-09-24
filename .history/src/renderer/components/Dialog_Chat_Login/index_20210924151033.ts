import { defineComponent, inject, onMounted, onUnmounted, reactive, toRefs, getCurrentInstance } from 'vue';
import useMove from '@renderer/mixins/drag'
import { menuShow, menuOn, menuListenersRemove } from '@renderer/config/menu';
import { ElMessage } from 'element-plus';
const { ipcRenderer } = require("electron");
import socket from '@renderer/utils/socket'

export default defineComponent({
  name: 'dialogDeskBackground',
  props: {
    dialogVisible: Boolean
  },
  setup(props, context) {
    const state = reactive({
      value: null,
      password: null,
      restaurants:[
        {value: '123456', password: 123},
        {value: '1551212', password: 123},
        {value: '12345215156', password: 123},
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
      state.password = item.password
    }
    const { proxy } = getCurrentInstance()
    const chatLogin = () => {
      (<any>proxy).$Store['chat']['setUser']({
        uid: state.value,
        password: state.password,
        arturl: 'https://himg.bdimg.com/sys/portrait/item/wise.1.34e37c47.mffK6OgXuMmfRzKuI7flGw.jpg?time=3667'
      })
      context.emit('update:dialogVisible', false)
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