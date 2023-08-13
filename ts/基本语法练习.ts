let a1: String = "2h"
a1 = "hello"
console.log(a1)

// nullh和 undefined
let a2: number
let a3: string
let a4: boolean

// 泛型
console.log(`------泛型------`)
// 以下函数中，arg1 的类型可以随便给，arg2只能是 number
function print<t>(arg1: t, arg2: number): t {
    console.log(`${arg1},${arg2}`)
    // 由于在函数声明的时候，返回值为泛型t，所以只能返回 arg1 类型的
    return arg1
}
// 以下语句中，r 的类型会随着 arg1 的类型而推论确定
let r = print(2, 2)

print<number>(4, 3)

// 双感叹号的用法
const t:boolean = !!null
console.log(t)
