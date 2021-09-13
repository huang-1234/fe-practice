const promise1 = function (delay, ...params) {
  return new Promise((resolve, reject) => {
    let count = 1;
    console.log('Promise1 start');
    setTimeout(() => {
      resolve('promise1 fulfilled');
    }, delay);
    console.log('promise resolve end');
  })
    .then(
      (res) => {
        console.log(`res in then${count++}<<`, res);
        return res;
      },
      err => {
        console.log(`res in then${count}<<`, err);
      }
    )
    .then(
      res => {
        console.log(`res in then${count++}<<`, res);
        // resolve(res + ' res has changed by reslove') // ReferenceError: resolve is not defined
        return res + ' res has changed by return';
      }
    )
    .then(
      res => {
        console.log('the res that had changed will be there<<', res);
        return res;
      }
    )
}

const promise2 = new Promise((resolve, reject) => {
  console.log('Promise1 start');
  setTimeout(() => {
    resolve('promise1 fulfilled');
  }, 100);
  console.log('promise resolve end');
})
  .then(
    res => {
      console.log('res in then1<<', res);
      return res;
    }
  )
  .then(
    res => {
      console.log('res in then2<<', res);
      return res + ' res has changed';
    }
  )
  .then(
    res => {
      console.log('the res that had changed will be there<<', res);
      return res;
    }
  )


async function handlePromise() {
  console.log('before await');
  const res = await promise1(100);
  console.log('after await')
  console.log('i had get res after await<<', res)
}

const datas = Promise.race([promise1(1000), promise2]).then(
  res => {
    console.log('the res of Promise all', res);
  }
)