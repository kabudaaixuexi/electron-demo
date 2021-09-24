import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/leafs/404.vue") },
    // { path: '/', name: '总览', component: () => import('@renderer/components/LandingPage.vue') },
    { path: '/', name: '总览', component: () => import('@renderer/leafs/_desk/index.vue') },
    { path: '/chat', name: '聊天', component: () => import('@renderer/leafs/_chat/index.vue'), meta: { title: '聊聊天吧' } },
]

export default routes