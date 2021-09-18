import setter from './setter'
import ChatState from './state'
export default {
    storeName: 'test',
    persistedState: false,
    state: new ChatState(),
    setter
}