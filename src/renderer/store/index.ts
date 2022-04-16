// import { App } from "vue"; 
import State from "./state";
// import moon from "xins.store.df";
import createStore from 'sw-decorator-property'
export default createStore(State, {
    usePersisted: true
})
/**
 * @State 全局状态
 * @false 要挂载的实例对象
 * @true 是否开启持久化
 */
// export default moon(State, false, true);
