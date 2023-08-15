// 定义执行器函数
const executor = (resolve: (value: any) => void, reject: (value: any) => void) => {
    console.log('执行器函数输出：构造函数调用了我')
    setTimeout(() => {
        let status = false
        if (status) // 利用status来模拟异步操作成功和失败状态
            resolve('value')
        else
            reject('reason for reject')
    }, 100)
    console.log('执行器函数输出：运行结束')
}
// 定义Promise结果处理函数
const onFulfilled = (value: any) => {
    console.log('onFulfilled输出：', value)
}
const onRejected = (reason: any) => {
    console.log('onRejected输出：', reason)
}
// 创建Promise对象，并将执行器函数传递给Promise的构造函数
const p = new Promise(executor)
// 执行Promise对象的then方法，并将两个结果处理函数传递给Promise对象
p.then(onFulfilled, onRejected)
// 代码结束
console.log('代码部分结束')
