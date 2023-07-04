import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('@/views/Home.vue') },
    { path: '/login', component: () => import('@/views/Login.vue') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router