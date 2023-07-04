import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getData } from '@/apis'
export const menusStore = defineStore('menus', () => {
    const menus = ref([])    // 定义一个 state
    async function getMenus() {
        const r = await getData('getmenus')
        menus.value = r.meta.data
    }
    return { menus, getMenus }
})
