<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
defineProps(['id'])
</script>
<template>
    <p>这是 home 组件</p>
    <router-link to="/home/about">关于</router-link>
    <router-link to="/home/investor">投资者关系</router-link>
    <router-view></router-view>
    <p>通过 props 方式获得的动态路由参数：{{ id }}</p>
    <p>通过 this.$route获取的：{{ this.$route.params.id }}</p>
</template> 