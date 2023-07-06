import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getData } from '@/apis'

import { ElMessage } from 'element-plus'
export const menusStore = defineStore('menus', () => {
    const menus = ref([])    // 定义一个 state
    const actived = ref('')
    async function getMenus() {
        try {
            const r = await getData('getmenus')
            menus.value = r?.meta?.data || []
            actived.value = r?.meta?.actived || ''
            if (menus.value.length <= 0) ElMessage({ type: 'error', message: '导入数据菜单失败' })
        } catch (e) {
            ElMessage({ type: 'error', message: e || 'API Error' })
        }
    }
    return { menus, getMenus }
})
