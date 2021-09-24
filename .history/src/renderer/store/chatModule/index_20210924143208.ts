import setter from './setter'
import ChatState from './state'
import { reactive } from 'vue'
export default {
    storeName: 'chat',
    persistedState: false,
    state: reactive({
        user: {
            name: '张三'
        }
    }),
    setter
}