import { RouteRecordRaw } from 'vue-router'
import BaseSub from '../leafs/_basesub/index.vue'
const subAppRoutes = [
    { path: '/basesub/sub-react', name: 'qiankunreact', component: () => import("@renderer/leafs/_basesub/index.vue") },
    { path: '/basesub/sub-react2', name: 'qiankunreact2', component: () => import("@renderer/leafs/_basesub/index.vue") },
]
const routes: Array<RouteRecordRaw> = [
    // { path: '/basesub/*', name: 'Basesub', component: BaseSub,children: [
    // ] },
    ...subAppRoutes,
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/leafs/404.vue") },
    { path: '/', name: '默认', component: () => import("@renderer/leafs/_desk/index.vue") },
    { path: '/desk', name: '桌面', component: () => import('@renderer/leafs/_desk/index.vue'), meta: { title: '我的桌面' } },
    { path: '/chat', name: '聊天', component: () => import('@renderer/leafs/_chat/index.vue'), meta: { title: '聊聊天吧' } },
]

export default routes