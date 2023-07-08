import { createRouter, createWebHashHistory } from 'vue-router'
import { getToken } from '@/utils/auth'
const routes = [
    {
        path: '/', component: () => import('@/layout/appMain.vue'),
        children: [
            {
                path: 'home', component: () => import('@/views/Home.vue')
            }
        ]
    },
    { path: '/login', component: () => import('@/views/Login.vue') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


// 导航守卫
router.beforeEach((to, from, next) => {
    const token = getToken()
    const login = token ? true : false
    if (login)
        if (to.path !== '/login')
            next()
        else
            next('/home')
    else {
        if (to.path !== '/login')
            next('/login')
        else
            next()
    }
})
export default router