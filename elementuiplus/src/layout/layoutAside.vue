<script setup>
import { ref } from 'vue'
import { menusStore } from '@/stores/menus'
import { setStorage, getStorage } from '@/utils/auth'
const menuStore = menusStore()
menuStore.getMenus()
const defaultActive = ref('')
defaultActive.value = getStorage('default-active') || ''
const menuItemClick = (index) => {
    setStorage('default-active', index + '')
}
</script>
<template>
    <el-menu :default-active="defaultActive" router background-color="#2a3f54" text-color="#e5e5e5"
        active-text-color="#ffd04b">
        <template v-for="item in menuStore.menus">
            <el-sub-menu v-if="item.children" :index="item.id + ''" :key="item.id + '_subMenu'">
                <template #title>
                    <el-icon>
                        <i-ep-location />
                    </el-icon>
                    <span>{{ item.title }}</span>
                </template>
                <el-menu-item v-for="subitem in item.children" :index="subitem.id + ''" :key="subitem.id + '_menuItem'"
                    @click="menuItemClick(subitem.id)">{{
                        subitem.title }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="item.id + ''" :key="item.id + '_menuItem'" @click="menuItemClick(item.id)">
                <el-icon><i-ep-menu /></el-icon>
                <span>{{ item.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
