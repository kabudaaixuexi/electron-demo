import { createApp } from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss'
import './permission'
import App from './entrance/App.vue'
import router from './router'
import { errorHandler } from './error'
import moon from '@renderer/store'
import { i18n } from "./i18n"
import GlobDirective from './mixins'
import { registerMicroApps, start, initGlobalState, MicroAppStateActions } from 'qiankun';
import { subApps } from './sub-app/subConfig'



registerMicroApps(subApps);
const actions = initGlobalState(moon.getState());
// 主项目项目监听和修改
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  // console.log(state, prev);
});
actions.setGlobalState(moon.getState());
start();


const app = createApp(App)
app.use(ElementPlus, { i18n: i18n.global.t })
app.use(router)
// app.use(createStore)
app.use(i18n)
app.use(GlobDirective)
errorHandler(app)

// 全局引入 TitleBar 组件
// app.component("TitleBar", TitleBar);
app.mount("#app")
