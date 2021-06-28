(async function(){
  try {
    await interview(1);
    await interview(2);
    await interview(3);

    await Promise.all([
      interview(4),
      interview(5),
    ])
  } catch (error) {
    console.log(`cry at ${error.round} round`)
  }
  function interview(round) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('sucess')
        } else {
          const error = new Error('failed')
          error.round = round;
          reject(error)
        }
      }, 800);
    })
  }
})()