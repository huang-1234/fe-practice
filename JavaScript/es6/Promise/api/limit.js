class PromiseLimit {

  limit = 3;
  execQueue = [];
  ajaxQueue = [];
  constructor(props) {
    const { limit, ajaxQueue } = props;
    if (props.limit > 0) {
      this.limit = props.limit;
    }
    if (limit >= ajaxQueue) {
      this.execQueue = ajaxQueue.slice(0, this.limit);
      this.ajaxQueue = [];
      this.runOne()
    } else {
      this.execQueue = ajaxQueue.slice(0, this.limit);
      this.ajaxQueue = ajaxQueue;
    }

  }
  runOne() {
    return Promise.allSettled(this.execQueue);
  }
  popRes(val) {
    if (execQueue.length < this.limit && this.ajaxQueue.length) {
      execQueue.push(this.ajaxQueue.pop());
    }
    this.run();
    console.log('val', val)
    return Promise.resolve(val);
  }
  run() {
    while (ajaxQueue.length) {
      const currentAjax = this.execQueue.pop();
      currentAjax.then(this.popRes);
    }
  }
}

// const fn = (t) => {
//   // 用setTimeout模拟异步请求
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ t, date: new Date() });
//     }, t * 1000);
//   })
// };


function generateAjax(queue) {
  return queue.map(q => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ ajax: 'ajax', date: new Date() });
      }, q * 1000);
    })
  })
}

const insLimit = new PromiseLimit({ limit: 5, ajaxQueue: generateAjax([1, 2, 3, 4]) });