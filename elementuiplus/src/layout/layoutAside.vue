<script setup>
import { menusStore } from '@/stores/menus'
const menuStore = menusStore()
menuStore.getMenus()
</script>
<template>
    {{ menuStore.menus }}
</template>