<script setup>
import {log,warn} from './tools'
// 使用 ref 函数实现响应式
// 1. 导入 ref 函数
import {ref} from 'vue'
// 2. 执行 ref 函数。传入一个数据，并用一个变量接受它。
const count = ref(0)
// 3. 改变他的值的时候，需要对 value 属性进行操作
const msg = ref('当前无消息')

const add = ()=>{
  count.value ++
}
log('hello')
warn('this is a warning')
// 4. 在模板内引用时候，直接使用它。

// 数组的响应式计算。从数组中筛选出偶数
import {computed} from 'vue'
const list1 = ref([1,2,3,4,6])
const list2 = computed(()=>{ return list1.value.filter(v => v%2 == 0)})
const change = () => { list1.value.push(9,10,11,12,13,14)}
// 侦听数据变化 watch 的用法
// 1. 先导入他
import {watch} from 'vue'
// 这里侦听刚才的计数器变化
// 侦听单个数据的用法
/* watch(count,(n,o)=>{
  msg.value = '侦听的数据变化了，从'+o+'到'+n
}) */
// 侦听多个数据的用法
watch([count,list1],([newcount,newlist],[oldcount,oldlist])=>{
  msg.value = '侦听的多个数据中的数组发生了变化。'+'count:'+oldcount+'=>'+newcount+'。list:'+oldlist+'=>'+newlist
})
// 深度监听
const v = ref({count:0})
setTimeout(()=>v.value.count++,3000)
watch(v,()=>{msg.value='v 变化了'},{deep:true})
// 精度监听，即将watch 的第一个参数换成一个回调函数，在回调函数中返回需要监听的对象的属性。需要value 属性
const v2 = ref({
  count:1,
  count2:0
})
setInterval(()=>v2.value.count2++,500)
watch(()=>v2.value.count2,()=>{msg.value="v2变化了"})

// 开始演示父组件向子组件传递参数
import ChildGetData from './components/ChildGetData.vue'

// 开始演示子组件向父组件发送消息
import ChildSendMsg from './components/ChildSendMsg.vue' 
const msgRecieved = ref('')
// 定义一个消息处理函数
function onDataChange(v,v2){
  msgRecieved.value = v+','+v2
}
</script>

<template>
<button @click="add">{{ count}}</button>
<p>计算属性的用法</p>
<p>原数组：{{ list1 }}</p>
<p>点击改变原数组：<button @click="change">点击</button></p>
<p>新数组:{{list2}}</p>
<h3>输出消息</h3>
<p>{{ msg }}</p>
<child-get-data msg="父组件传递参数，hello" :itemid="32000"></child-get-data>
<child-send-msg @data-change="onDataChange"></child-send-msg>
<p>{{ msgRecieved }}</p>
</template>

<style scoped>

</style>
