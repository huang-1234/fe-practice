/* 
(() => {
  console.log(async function() {
    return 4
    throw new Error('failed')
  }())
  console.log(function() {
    return new Promise((resolve, reject) => {
      resolve(4)
      // reutrn 4;
      // reject('failed')
    })
  }())
})()
 */
/* 
(() => {
  const result = async function () {
    var content = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(6)
      },500);
    })
    console.log(content);
    return 4
  }
  setTimeout(() => {
    console.log(result);
  }, 800);
})()
   */
(() => {
  const result = async function () {
    try {
      var content = await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('failed'))
        },500);
      })
    } catch (error) {
      console.log(error.message);
    }

    console.log(content);
    return 4
  }
  setTimeout(() => {
    // console.log(result);
  }, 800);
})()