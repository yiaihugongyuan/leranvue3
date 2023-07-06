<script setup>
import { menusStore } from '@/stores/menus'
const menus = menusStore()
menus.getMenus()
</script>
<template>
    <p>左侧菜单</p>
    {{ memus }}
    <router-link to="/home">首页</router-link>
    <router-link to="/login">登录</router-link>
    {{ menus.menus }}
</template>