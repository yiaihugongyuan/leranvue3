class promiseMsg {
    msg: string[] = []
    addMsg(msg: string) {
        this.msg.push(msg)
    }
    showMsg() {
        setTimeout(
            () => {
                for (const key in this.msg) {
                    console.log(`第${Number(key) + 1}步：${this.msg[key]}`)
                }
            }, 0
        )
    }
}
const m = new promiseMsg()
// 案例 1：模拟 promise
// class MyPromise {
//     private state: string;
//     private value: any;
//     private onFulfilledCallbacks: Array<Function>;
//     private onRejectedCallbacks: Array<Function>;

//     constructor(executor: Function) {
//         m.addMsg('执行构造函数')
//         this.state = 'pending';
//         this.value = undefined;
//         this.onFulfilledCallbacks = [];
//         this.onRejectedCallbacks = [];

//         const resolve = (value: any) => {
//             m.addMsg('resolve 被调用')
//             if (this.state === 'pending') {
//                 m.addMsg('resolve 函数：修改状态')
//                 this.state = 'fulfilled';
//                 this.value = value;
//                 this.onFulfilledCallbacks.forEach(callback => {
//                     m.addMsg('resolve函数内部：准备调用函数数组上的函数')
//                     callback(this.value)
//                     m.addMsg('由此证明：then方法上传入的方法，是由 resolve 函数调用的。')
//                 });
//             }
//         };

//         const reject = (reason: any) => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected';
//                 this.value = reason;
//                 this.onRejectedCallbacks.forEach(callback => callback(this.value));
//             }
//         };

//         try {
//             m.addMsg('执行executor')
//             executor(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }

//     then(onFulfilled: Function, onRejected: Function) {
//         m.addMsg('执行then方法')
//         if (this.state === 'fulfilled') {
//             m.addMsg('then函数 fulfilled状态')
//             onFulfilled(this.value);
//         } else if (this.state === 'rejected') {
//             m.addMsg('then函数 rejected状态')
//             onRejected(this.value);
//         } else {
//             m.addMsg('then放法在pending状态下，注册用户在 then 方法参数内传入的方法')
//             this.onFulfilledCallbacks.push(onFulfilled);
//             this.onRejectedCallbacks.push(onRejected);
//             m.addMsg('then函数 pending 方法注册完成，个数=' + this.onFulfilledCallbacks.length)
//         }
//     }
// }

// // 使用 Promise 获取用户信息的示例
// const getUserInfo = new MyPromise((resolve: any, reject: any) => {
//     // 模拟异步操作，比如发送请求获取用户信息
//     m.addMsg('executor 函数内部')
//     setTimeout(() => {
//         m.addMsg('执行封装的异步操作函数')
//         const user = { name: 'Alice', age: 25 };
//         if (user) {
//             resolve(user);
//         } else {
//             reject('Failed to get user information');
//         }
//     }, 0);
// });

// //处理获取用户信息成功的情况
// getUserInfo.then(
//     (user: any) => {
//         m.addMsg('用户定义的 onfullfiled 方法被调用')
//         m.addMsg('用户定义的方法输出：' + user);
//     },
//     (err: any) => { console.log(err) }
// );

// 案例 2：真实的 Promise 试验
m.addMsg('案例2：定义执行器函数，这个函数将会作为参数传递给Promise的构造函数，并被构造函数调用。')
const executor = (resolve:(value:any)=>void,reject:(value:any)=>void) => {
        m.addMsg('案例 2：executor函数输出：构造函数调用了我')
        resolve('案例 2：传递给 then 方法的值')
        m.addMsg('案例 2：executor函数输出：resolve方法调用完成')
}
const onFulfilled = ()=>{}
const p = new Promise(executor)
m.addMsg('案例 2：准备调用 then 方法，传递两个状态状态处理函数')
p.then(value => {
    m.addMsg('案例 2：then方法传递给 promise 的方法被调用')
    m.addMsg('案例 2：得到了 resolve 的值：' + value)
})
m.addMsg('案例 2：其实我是先于 then 方法被调用的，说明通过 then 方法传递给 promise 的方法是异步的')



m.showMsg()