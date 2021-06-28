
(() => {
  var promise2 = interview(1).then((res) => {
    return interview(2);
  }).then(() => {
    return interview(3);
  }).then((res) => {
    console.log('smile<<', res);
  })
    .catch((err) => {
      console.log(`cry at ${err.round} round`);
    });

  // setTimeout(() => {
  //   console.log(promise2);
  // }, 800);


  function interview(round) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('sucess');
        } else {
          const error = new Error('failed');
          error.round = round;
          reject(error);
        }
      }, 800);
    });
  }
})();