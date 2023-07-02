<script setup>
defineProps({
    msg:String,
    itemid:{
        type:Number,
        required:true,
        default:3000
    }
})
</script>

<template>
    <h3>演示父组件向子组件传递参数</h3>
    <p>这是父组件传递给我的数据：{{ msg }}</p>
    <p>这是父组件传递给我的数据2：{{ itemid }}</p>
</template>