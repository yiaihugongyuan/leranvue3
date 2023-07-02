<script setup>
import {useCountStore} from '@/store/count.js'
const countStore = useCountStore()
</script>

<template>
    <p>子组件中的引用state：{{ countStore.count }}</p>
    <p>子组件中的调用 getter：{{ countStore.twiceCount }}</p>
    <p>子组件中调用action：<button @click="countStore.increment">增加</button></p>
</template>