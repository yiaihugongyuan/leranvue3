import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getData } from '@/apis'
export const menusStore = defineStore('menus', () => {
    const menus = ref([])    // 定义一个 state
    const actived = ref('')
    async function getMenus() {
        const r = await getData('getmenus')
        console.log(r)
        menus.value = r?.meta?.data || []
        actived.value = r?.meta?.actived
    }
    return { menus, getMenus }
})
