// 这个就是每次执行的异步请求方法，参数不一样
const fn = (t) => {
  // 用setTimeout模拟异步请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ t, date: new Date() });
    }, t * 1000);
  })
};

let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3]


/**
 * ajaxQueue 请求数据源数组
 * limit 是每次并行发起多少个请求
 * handleFn 就是异步处理函数
*/
function limitQueueFn(ajaxQueue, limit, handleFn) {
  // 完成任务数
  let index = 0;
  // 第一次的时候 一次性执行 limit 个任务
  for (let i = 0;i < limit;i++) {
    run();
  }
  // 执行一个任务
  function run() {
    // 构造待执行任务 当该任务完成后 如果还有待完成的任务 继续执行任务
    return new Promise((resolve, reject) => {
      const value = ajaxQueue[index];
      index++; // 这个是同步操作
      // resolve 返回 promise
      return handleFn(value).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    }).then(() => {
      if (index < ajaxQueue.length) {
        run()
      }
    })
  }
};


limitQueueFn(arr, 3, res => {
  console.log('任务完成', res, new Date());

});