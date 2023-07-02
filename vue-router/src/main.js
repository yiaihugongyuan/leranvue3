
import { createApp } from 'vue'
import App from './App.vue'
// 1. 导入路由实例
import {router} from '@/router'
const app = createApp(App)
// 2. 注入路由实例
app.use(router)
app.mount('#app')
