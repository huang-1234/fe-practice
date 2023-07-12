const axios = require('axios')
// 并发请求函数
const concurrencyRequest = (requestList, maxNum) => {
  return new Promise((resolve) => {
    if (requestList.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let index = 0; // 下一个请求的下标
    let count = 0; // 当前请求完成的数量

    // 发送请求
    async function request() {
      if (index === requestList.length) return;
      const i = index; // 保存序号，使result和urls相对应
      const curRequest = requestList[index];
      index++;
      console.log('index', index);
      curRequest().then(resp => {
        results[i] = resp;
      }).catch(err => {
        // err 加入到results
        results[i] = err;
      }).finally(() => {
        count++;
        // 判断是否所有的请求都已完成
        if (count === requestList.length) {
          console.log('完成了');
          resolve(results);
        }
        request();
      });
    }

    // maxNum和urls.length取最小进行调用
    const times = Math.min(maxNum, requestList.length);
    for (let i = 0;i < times;i++) {
      request();
    }
  })
}

const requestList = [];
for (let i = 1;i <= 7;i++) {
  if (i === 1) {
    requestList.push(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios(`https://jsonplaceholder.typicode.com/todos/${i * 2}`, { idx: i }).then(res => {
            resolve(res)
          })
        }, 4000);
      })
    })
  } else {
    requestList.push(() => axios(`https://jsonplaceholder.typicode.com/todos/${i * 2}`, { idx: i }))
  }
}
concurrencyRequest(requestList, 3).then(response => {
  response.forEach(res => {
    console.log(res?.data)
  })
})
