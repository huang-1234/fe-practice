/*  */
/*
function async1(){
  console.log('async1 start');
  const p = async2();
  return new Promise((resolve) => {
      Promise.resolve().then(() => {
          p.then(resolve)
      })
  })
  .then(() => {
      console.log('async1 end')
  });
}

function async2(){
  console.log('async2');
  return Promise.resolve();
}

async1();

new Promise((resolve) => {
  console.log(1)
  resolve()
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(4)
})
 */


// =======================================================================
/* 简单说，await v 初始化步骤有以下组成：

把 v 转成一个 promise（跟在 await 后面的）。
绑定处理函数用于后期恢复。
暂停 async 函数并返回 implicit_promise 给调用者。
我们一步步来看，假设 await 后是一个 promise，且最终已完成状态的值是 42。然后，引擎会创建一个新的 promise 并且把 await 后的值作为
 resolve 的值。借助标准里的 PromiseResolveThenableJob 这些 promise 会被放到下个周期执行。

结合规范和这篇文章，简单总结一下，对于 await v：

await 后的值 v 会被转换为 Promise
即使 v 是一个已经 fulfilled 的 Promise，还是会新建一个 Promise，并在这个新 Promise 中 resolve(v)
await v 后续的代码的执行类似于传入 then() 中的回调
如此，可进一步对原题中的 async1 作等价转换 */
/*
{
  function async1() {
    console.log('async1 start')
    return new Promise(resolve => resolve(async2()))
      .then(() => {
        console.log('async1 end')
      });
  }

  function async2() {
    console.log('async2');
    return Promise.resolve();
  }

  async1();

  new Promise((resolve) => {
    console.log(1)
    resolve()
  }).then(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  }).then(() => {
    console.log(4)
  })
}
 */

/* 总结：
对于一个对象 o，如果 o.then 是一个 function，那么 o 就可以被称为 thenable 对象
对于 new Promise(resolve => resolve(thenable))，即“在 Promise 中 resolve 一个 thenable 对象”，需要先将 thenable
转化为 Promsie，然后立即调用 thenable 的 then 方法，并且 这个过程需要作为一个 job 加入微任务队列，以保证对 then 方法
的解析发生在其他上下文代码的解析之后
下面给出示例：
 */
/*
{
  let thenable = {
    then(resolve, reject) {
      console.log('in thenable');
      resolve(100);
    }
  };

  new Promise((r) => {
    console.log('in p0');
    r(thenable);
  })
  .then(() => { console.log('thenable ok') })

  new Promise((r) => {
    console.log('in p1');
    r();
  })
  .then(() => { console.log('1') })
  .then(() => { console.log('2') })
  .then(() => { console.log('3') })
  .then(() => { console.log('4') });
}
 */



// ===============================================
/*  */
{
  async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
  async function async2(){
    console.log('async2')
  }
  console.log('script start')
  setTimeout(function(){
    console.log('setTimeout')
  },0)
  async1();
  new Promise(function(resolve){
    console.log('promiseStart')
    resolve();
  }).then(function(){
    console.log('promise2')
  }).then(function() {
    console.log('promise3')
  }).then(function() {
    console.log('promise4')
  }).then(function() {
    console.log('promise5')
  }).then(function() {
    console.log('promise6')
  }).then(function() {
    console.log('promise7')
  }).then(function() {
    console.log('promise8')
  })
  console.log('script end')
}













/* 正确输出结果：
script start
async1 start
async2
promiseStart
script end
async1 end
promise2
promise3
promise4
promise5
promise6
promise7
promise8
setTimeout
 */

/* https://segmentfault.com/a/1190000017954500 */