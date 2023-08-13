/**
 * 抽象类
 */
abstract class CPerson {
    name='';
    // 注意观察两种定义方法类型的方法，性质不一样，在继承类中实现的方法也不一样
    abstract fn(): void; // 这是成员函数
    abstract fn2:()=>void  // 这是成员属性
}

//const p1 = new CPerson;  // Error。抽象类不能直接实例化。

class CMan extends CPerson { // OK.抽象类只能被继承
    // 必须实现抽象类的 abstract 成员
    constructor() {
        super()
    }
    fn(): void {
        
    }
    fn2 = () => { }
}

/**
 * 普通类
 */
// 定义类的时候，所有属性和方法都要初始化，要不初始赋值，要不在构造函数内赋值，否则编译阶段会出错
class CBase {
    name: string
    attr1:()=>void
    fn1(){}
}