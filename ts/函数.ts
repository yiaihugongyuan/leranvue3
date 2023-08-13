/**
 * 函数类型的总结试验
 */
// 1. 用接口定义函数类型
interface IFn {
    (p:string):string
}
// 实现函数类型，两种方法
let fn1: IFn = function (b: string) { return '' }
let fn2: IFn = (b: string) => ''

// 2. 接口内的函数类型
// 注意与接口内函数类型属性的定义方式的区别，返回值的定义方式的区别，即：和 =>
interface IFn2 {
    fn: () => string
    fn2():void
}
// 接口与类不一样，只有方法属性，以上两种方式声明了两个方法属性，而不是成员函数
// 因此尽管以下声明方法的方式不一样，但实现的方法是一样的
// 以下是第一种方法：
let fn2imp: IFn2 = {
    fn: () => '',
    fn2: ()=> {}
}
// 以下是第二种方法：
let fn2imp2: IFn2 = {
    fn() {return ''},
    fn2(){}
}

// 3. 类型别名中的的函数类型
// 与接口一样，类型别名内的函数成员的定义也有两种方式
type TPerson = {
    say: () => void
    work(): void
}
let p1: TPerson = {
    say() { console.log('person1 say')},
    work(){}
}
p1.say()
let p2: TPerson = {
    say:()=>{ console.log('person2 say')},
    work: () => {
        console.log('p2 work')
        return 1
    }
}
p2.work()

// 4. 类中的函数类型
// 注意观察以下类定义中的两个函数类型。say做为类的属性，可以用函数类型定义，而不用立即实现它。work做为类方法，必须立即实现它。
class ClassPerson {
    // name是类的属性，可以定义为 string 类型
    name=''
    // say是类的属性，可以定义其为函数类型
    say: (b: string) => void;
    // work 是类的方法，必须马上实现它
    /**
     * 以上两个属性如果没有用“=”初始化，也就是说赋值，也应该在构造函数内初始化。否则在编译后会报警。
     */


    work() { }
    constructor() {
        this.say = (b:string)=>{console.log(b)}
    }
    // 在定义的时候初始化函数类型属性
    jump=()=>{console.log('the person jump')}
}
const cp2 = new ClassPerson;
cp2.work()
cp2.say('cp2 说话')
cp2.jump()