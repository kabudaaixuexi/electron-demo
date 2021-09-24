import setter from './setter'
import ChatState from './state'
export default {
    storeName: 'chat',
    persistedState: false,
    state: {
        user: {
            name: '张三'
        }
    },
    setter
}