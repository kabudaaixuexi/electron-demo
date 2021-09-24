import setter from './setter'
import ChatState from './state'
import { reactive } from 'vue'
export default {
    storeName: 'chat',
    persistedState: true,
    state: reactive({
        user: null
    }),
    setter
}