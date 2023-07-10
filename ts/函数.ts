// 可选参数
function f1(a: number, b?: number): number {
    return a + b
}

console.log(f1(1, 2))

let person: { name: string; age: number }
person = { name: "黄冈", age: 25 }
let person2: {
    name: string; age: number
    sex?:string
}
person2 = { name: '李四', age: 34 }
// 定义的时候立即赋值
let person4= {
    name: '张',
    age: 24
}
// 接口
interface person5 {
    name: string
    age: number
    sex?: string
}
let p:person5 = {name: '哈哈哈',age:44,sex:'mail'}