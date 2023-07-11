// 可选参数
function f1(a: number, b?: number): number {
    return a
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
let p: person5 = { name: '哈哈哈', age: 44, sex: 'mail' }
interface person6 extends person5 {
    grade: number
}

let p2: person6 = {
    name: 'name',
    age: 444,
    sex: '男',
    grade: 4
}
// 元组
let xy: [number, number] = [3, 4]
xy = [4, 4]
console.log(xy[0])
// 可以定义一个元组的类型别名吗？
type xy2 = [x:number, y:number]
let xy3: xy2 = [3, 4]
console.dir(xy3)
// 字面量类型
const str1 = 'heelo'
let str2 = 'hello'
let dir: 'left' | 'right'
dir = 'left'
console.log(dir)
// 枚举类型
enum direction {
    left=10,right=20,up=30,down=33,s="name"
}
console.log(direction.s)
enum enum2{
    l,r="",s="name"
}
console.log(enum2.l)
// typeof
let ppin = { x: 1, y: 3 }
function f2(point: typeof ppin) { }
f2({ x: 33, y: 4444 })

class man{ }
const people = new man()
class teacher {
    age: number// 没有默认值
    gender = '男' // 有默认值。注意这里的等于号，不是冒号。后期可以更改。
	constructor(age: number,gender: string){
		this.age = age
		this.gender = gender
	}
}
const t1 = new teacher(1, '男哈哈')
console.log(t1)

// 通过一个实现接口来继承一个类，要实现接口的所有属性和方法
interface animal{
    move(): void,
    age: number;
    gender: number
    say(n: string): void
    sleep:(m:number)=>void
}
class dog implements animal {
    move() { }
    age = 10
    gender = 1
    say() { return 1 }
    b = 3
    junmp() { console.log('jump') }
    sleep=(m:number)=>{console.log(`休息${m}秒钟`)}
}
const dog1 = new dog
console.log(dog1.b)
dog1.junmp()
dog1.sleep(3)
// 研究 type 的用法
type type1 = (a: number) => number
const ftype: type1 = (ax: number) => { console.log(ax); return 1 }

// 字面量
const t: string = "b-737"

// class类型兼容性的演示
class a {
    b: number = 1;
    c() {};
}
class b {
    a: number = 44;
    b: number =1 ;
    c(){console.log('d')}
}
// class b 的属性完全包含 a，所以可以兼容 a
let a11: a = new b;
console.log(a11)