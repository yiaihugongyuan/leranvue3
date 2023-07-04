<script setup>
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
const msg = ()=>{
    ElMessage('this is a message.')
    }

</script>

<template>
 <el-button @click="msg">hello</el-button>
</template>

<style scoped>

</style>
