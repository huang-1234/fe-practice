
// (() => {
//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('sucess')
//     }, 500);

//     setTimeout(() => {
//       reject('reject')
//     }, 400);
//   }).then((res) => {
//     console.log('then<<', res);
//   }).catch((err) => {
//     console.log('catch<<', err);
//     console.log(promise1);
//   })

//   console.log(promise1);
//   setTimeout(() => {
//     console.log('setTimeout<<', promise1);
//   },800)
// })()

(() => {
  let promise2 = interview();
  let promise3 = promise2.then((res) => {
    console.log('res<<', 'smile')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('accept')
      }, 400);
    })
    // throw new Error('refuse')
  })
  //   .catch((err) => {
  //   // console.log('err<<','cry')
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('accept')
  //     }, 400);
  //   })
  // })

  setTimeout(() => {
    console.log(promise2);
    console.log(promise3);
  }, 800);
  setTimeout(() => {
    console.log(promise2);
    console.log(promise3);
  }, 1000);

  function interview() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('sucess')
        } else {
          throw new Error('failed')
        }
      }, 800);
    })
  }
})()