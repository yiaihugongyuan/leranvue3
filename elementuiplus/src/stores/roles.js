import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getData } from '@/apis'

import { ElMessage } from 'element-plus'
export const rolesStore = defineStore('roles', () => {
    const roles = ref([])    // 定义一个 state
    async function getRoles() {
        try {
            const r = await getData('getroles')
            roles.value = r?.data || []
        } catch (e) {
            ElMessage({ type: 'error', message: e || 'API Error' })
        }
    }
    return { roles, getRoles }
})
