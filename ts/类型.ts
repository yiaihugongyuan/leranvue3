// 类型断言
type p = number | string

function showp(P: p) {
    console.log((P as string).length)
}
showp(2)
// 内置类型
let n1 = new Number()
let n2 = 3
let n3 = new Date()
console.log(n3.getFullYear())
console.log(n3.getHours())
console.log(n3.getTime())
console.log(n3.getTimezoneOffset())
let error = new Error('发生我错。')
try {
    throw error
} catch (e) {
    console.log('run here')
    console.log(typeof e)
}

// 字面量类型的意义
type sex = 'mail' | 'femail'
let sssss:sex = 'mail'