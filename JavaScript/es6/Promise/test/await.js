let idx = 1
{
  // (() => {
  //   async function async1() {
  //     console.log('async1 start')
  //     await async2()
  //     console.log('async1 end')
  //   }
  //   async function async2() {
  //     console.log('async2')
  //   }

  //   async1();

  //   new Promise((resolve) => {
  //     console.log(1)
  //     resolve()
  //   }).then(() => {
  //     console.log(2)
  //   }).then(() => {
  //     console.log(3)
  //   }).then(() => {
  //     console.log(4)
  //   })
  // })(idx)
}

{
  (() => {
    async function async1() {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }
    async function async2() {
      console.log('async2')
    }

    async1();

    new Promise((resolve) => {
      console.log(1)
      resolve()
    }).then(() => {
      console.log(2)
    }).then(() => {
      console.log(3)
    }).then(() => {
      console.log(4)
    })
  })(idx)
}