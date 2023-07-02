<script setup>
import {storeToRefs} from 'pinia'
import { useCountStore } from '@/store/count'
import child from '@/components/ChildUseStore.vue'
const count = useCountStore()
// 解构赋值，得到 action
const {increment:add} = count
const { count:count2,twiceCount} = storeToRefs(useCountStore())
</script>

<template>
  <div class="code-box">
    <h3>Pinia在主组件中的使用</h3>  
<p>count:{{ count.count }}</p>
<p>count*2:{{ count.twiceCount }}</p>
<button @click="count.increment">增加</button>
<h3>解构赋值</h3>
<p>count: {{ count2 }}</p>
<p>解构赋值得到的方法：<button @click="add">增加</button></p>
</div>
<div class="code-box">
  <h3>Pania在子组件中的使用</h3>
  <child></child>
</div>
</template>

<style scoped>
.code-box{
  box-sizing: border-box;
  border: 1px solic;
}
</style>
