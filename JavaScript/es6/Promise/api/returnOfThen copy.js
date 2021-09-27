const promiseFac = function (delay, ...params) {
  return new Promise((resolve, reject) => {
    let count = 1;
    console.log('Promise1 start');
    setTimeout(() => {
      resolve('promiseFac fulfilled');
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

async function handlePromise() {
  console.log('before await');
  const res = await promiseFac(100);
  console.log('after await')
  console.log('i had get res after await<<', res)
}

const datas = Promise.race([promiseFac(1000), promiseFac(100)]).then(
  res => {
    console.log('the res of Promise all', res);
  }
)