// 泛型声明一个类型变量，等待用户给他指定具体类型，他接受这个类型。
/**
 * 定义一个泛型函数
 */
// 1. 箭头函数的形式声明泛型函数，将类型变量放在参数前面
const f1 = <T>(b: T): T => {
    return b
}
// 2. 普通声明方式，将类型变量放在函数名后面
function f2<T>(a: T) {
    return a
}
// 3. 调用一个泛型函数，可以在函数名后省略<>，但 ts 只会推断出一个字面量的类型。最好是直接之名类型：
// 直接调用函数，会正确推动类型
console.log(f1<number>(1))
f2(true)
// 赋值的时候推断成字面变量。
let v2 = f2('333')

/**
 * 泛型约束
 */
interface IStr {
    length: number
}
function f3<T extends IStr>(c: T): number {
    return c.length
}
console.log(f3('hell'))

function getProp<T, key extends keyof T>(p: T, k: key) {
    return p[k]
}
const prop1 = {
    name: '张景平',
    age: 43
}
getProp(prop1, 'name')
getProp(prop1, 'age')

/**
 * 接口泛型
 */
// 声明方法：在接口名后声明泛型
interface IPerson<T, U extends keyof T> {
    a: T,
    b: T,
    c: U
}

function f4(b: IPerson<string, number>) {

}

let IPerson1: IPerson<string, number> = {
    a: 'heelo',
    b: 'heell',
    c: 3
}

/**
 * 泛型类
 */

// 1. 声明泛型类
class cla<T>{
    a: T;
    b?: T
    c = 8
    d?= "string"
    e: (b: T) => T
    constructor(a: T, b: T) {
        this.a = a
        //this.b = b
        this.e = (b: T) => b
    }
    f = (c1: T) => c1
}
const cla1 = new cla(1, 3);
const sss = cla1.b
cla1.e(1)
console.log(cla1.d)

/**
 * 签名映射
 */
interface IKey<t> {
    [index: number]: t | number
}

const s: IKey<string> = [0, 3, 3, '33']

interface IQuery {
    a: number,
    b: string,
    c: boolean
}
interface IQ2 {
    c: keyof IQuery
}

let a: Object = 1


let b1: object = [] // 数组
let b2: object = {} // 对象
let b3: object = () => { }  // 函数
b3 = []  // 也可以换类型

/**
 * 泛型与 promise
 */
interface Data {
    code: number,
    msg: string
}
console.log('\r\n泛型和 promise\r\n')
const axios = {
    get<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            resolve(JSON.parse('{"code":3,"msg":"hello"}'))
            // let xhr: XMLHttpRequest = new XMLHttpRequest()
            // xhr.open('GET', url)
            // xhr.onreadystatechange = () => {
            //     if (xhr.readyState === 4 && xhr.status == 200) {
            //         resolve(JSON.parse(xhr.responseText))
            //     }
            // }
            // xhr.send(null)
        })
    }
}
axios.get<Data>('{"code":3,"msg":"hello"}').then(res => {
    console.log(res)
})


let anyData: any = 'hello'
let response: Data = anyData
console.log(response.msg)