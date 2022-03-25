import { RouteRecordRaw } from 'vue-router'

// 乾坤subapp
const subAppRoutes = [
    { path: '/qiankun/sub-react', name: 'qiankunreact', component: () => import("@renderer/leafs/_qiankun/index.vue") },
    { path: '/qiankun/sub-react2', name: 'qiankunreact2', component: () => import("@renderer/leafs/_qiankun/index.vue") },
]
const routes: Array<RouteRecordRaw> = [
    ...subAppRoutes,
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/leafs/404.vue") },
    { path: '/', name: '默认', redirect:'/notepad', component: () => import('@renderer/leafs/_index/index.vue'), meta: { title: '我的桌面' } },
    { path: '/desk', name: '桌面', component: () => import('@renderer/leafs/_desk/index.vue'), meta: { title: '我的桌面' } },
    { path: '/chat', name: '聊天', component: () => import('@renderer/leafs/_chat/index.vue'), meta: { title: '聊聊天吧' } },
    { path: '/qiankun', name: '微前端', component: () => import('@renderer/leafs/_qiankun/index.vue'), meta: { title: '微前端学习' } },
    { path: '/notepad', name: '记事本', component: () => import('@renderer/leafs/_notepad/index.vue'), meta: { title: '记录一下' } },
]

export default routes