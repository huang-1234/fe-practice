
(() => {
  Promise.all([
    interview('alibaba'),
    interview('tencent'),
  ])
    .then(() => {
      console.log('smile');
    }).catch((err) => {
      console.log(`cry for ${err.name}`);
    })


  function interview(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('sucess')
        } else {
          const error = new Error('failed')
          error.name = name;
          reject(error)
        }
      }, 800);
    })
  }
})()