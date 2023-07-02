// 在 src 目录下创建一个 router 目录，并创建 index.js模块文件。
// 1. 导入两个函数，createRouter 和 createWebHashHistory
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import About from '@/components/About.vue'
import Investor from '@/components/Investor.vue'
// 2. 创建 Router 实例
export const router = createRouter(
    {
        history: createWebHashHistory(),// 指定 hash 模式
        // 路由数组，指定什么路由与组件的对应关系，在此之前，需要导入对应的组件
        routes: [
            {
                path: '/home',
                component: Home,
                // 定一个子路由定向，让打开这个 home 路径的时候，直接跳转到/home/about，这里应该提供全路径
                redirect: '/home/about',
                // 子路由规则，path 不能要/
                children: [
                    { path: 'investor', component: Investor },
                    { path: 'about', component: About },
                ]
            },
            { path: '/login', component: Login },
            { path: '/', redirect: '/home' },
            // 动态路由，在路径内用冒号声明一个变量id 接受动态参数。这里也直接实现了路由跳转
            { path: '/home/:id', component: Home, props: true }
        ]
    }
)

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log(to)
    const login = false
    if (login)
        next()
    else {
        if (to.path !== '/login')
            next('/login')
        else
            next()
    }
}) 