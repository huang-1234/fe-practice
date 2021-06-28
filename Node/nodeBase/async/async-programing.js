(function findJobs() {
  
  function interview(callback) {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        callback(null,'success')
      }
      else {
        callback(new Error('fail'))
      }
    }, 2000);
  }
  interview((res,success) => {
    if (res) {
      return console.log('cry at 1st round');
    }
    interview((res) => {
      if (res) {
        console.log('cry at 2st round');
      }
      interview((res) => {
        if (res) {
          console.log('cry at 3st round');
        } else {
          console.log(success);
        }
      })
    })
  })
})()