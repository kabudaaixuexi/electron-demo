import { createApp } from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss'
import './permission'
import App from './entrance/App.vue'
import router from './router'
import { errorHandler } from './error'
import store from './store'


import { i18n } from "./i18n"

// import TitleBar from "./components/common/TitleBar.vue"

const app = createApp(App)
app.use(ElementPlus, { i18n: i18n.global.t })
app.use(router)
app.use(store)
app.use(i18n)
errorHandler(app)

// 全局引入 TitleBar 组件
// app.component("TitleBar", TitleBar);

import { io } from 'socket.io-client'
console.log(io);
setTimeout(()=>{
    const socket = io('http://localhost:30002')
console.log(socket);

},5000)


app.mount("#app")