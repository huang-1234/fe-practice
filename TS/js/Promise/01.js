const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve(12)
}).then((res) => {
  console.log(res);
})