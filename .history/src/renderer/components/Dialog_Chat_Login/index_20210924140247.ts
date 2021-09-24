import { defineComponent, h, onMounted, onUnmounted, reactive, toRefs } from 'vue';
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
  setup(props) {
    const state = reactive({
      uid: null,
      restaurants:[
        {uid: 123456, password: 123},
        {uid: 1551212, password: 123},
        {uid: 12345215156, password: 123},
        {uid: 123532456, password: 123},
        {uid: 12352456, password: 123},
        {uid: 123123456, password: 123},
        {uid: 534643, password: 123},
        {uid: 12634633456, password: 123}
      ]
    })
    const querySearch = (queryString: string, cb) => {
      const results = queryString
        ? state.restaurants.filter(createFilter(queryString))
        : state.restaurants
      // call callback function to return suggestions
      console.log(results);
      
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.uid.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const handleSelect = (item) => {
      console.log(item)
    }
    onMounted(() => {
      console.log(props);
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
      querySearch, handleSelect
    };
  }
});