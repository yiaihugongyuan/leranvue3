<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const goToHome = () => {
    router.push('/home')
}
</script>
<template>
    <p>这是 login 组件</p>
    <button @click="goToHome">跳转到首页</button>
    <button @click="$router.go(-1)">回退</button>
</template>