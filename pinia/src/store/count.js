import {defineStore} from 'pinia'
import {ref,computed} from 'vue'

export const useCountStore = defineStore('count',()=>{
    const count = ref(0)
    const increment = ()=>{count.value ++}
    const twiceCount = computed(()=>count.value*2)
    return {count,increment,twiceCount}
})