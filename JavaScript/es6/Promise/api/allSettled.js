
const { promises, rejectTimeout } = require('../generatePromise');
Promise.allSettled([...promises, rejectTimeout("don't be fitness!", 10000)]).then(res => {
  console.log('allSettled', res)
})