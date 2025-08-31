function asyncFn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        console.log('inner success');
        resolve('resolve success');
      } else {
        console.log('inner failed');
        reject('reject failed');
      }
    }, 5 * 1000 * Math.random());
  });
}

function runWithRetry(fn, retryTimes, timeout) {
  let finalReject;
  // 你的实现
  // retryTimes不为0时自动递归调用fn
  function handleError(e) {
    if (retryTimes--) {
      console.log('retryTimes:', retryTimes)
      fn().catch(handleError)
    } else {
      console.log('failed');
      finalReject(e)
    }
  }

  return new Promise((resolve, reject) => {
    finalReject = reject;
    // 需要超时自动失败
    if (timeout) {
      return Promise.race([
        fn().catch(handleError),
        // race 赛跑、超时自动失败
        new Promise((rs, rj) => {
          setTimeout(() => finalReject('timeout error'), timeout)
        })
      ])
    } else {
      // 失败重试
      return fn().catch(handleError)
    }
  });
}

runWithRetry(asyncFn, 3, 10) // 重复调用asyncFn函数直至成功（返回resolved的Promise）或达到重试次数上限，或者超时
  .then(console.log, console.log);

// 可能的输出1：
// inner failed 第一次失败
// inner failed 第一次重试失败
// inner success 第二次重试成功
// success

// 可能的输出2:
// inner failed 第一次失败
// timeout error 超时
// inner failed 超时前发起的重试调用