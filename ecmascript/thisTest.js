const rootObj = {
  a() {
    console.log(this)
  },
  b: () => {
    console.log(this)
  }
}
// 是否是箭头函数


// const fa = root.a
// fa()
const fb = rootObj.b
fb()

fb.call(rootObj)