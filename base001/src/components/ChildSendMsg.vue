<script setup>
const emit = defineEmits('dataChange')
function sendDataChangeMsg(){
    emit('dataChange','子组件发送来了消息：dataChange','这是第二个参数')
}
</script>

<template>
    <div>
        <h3>我是子组件部分</h3>
        <p><button @click="sendDataChangeMsg">点击子组件向组件发送消息</button></p>
    </div>    
</template>

