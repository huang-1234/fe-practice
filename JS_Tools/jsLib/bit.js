

let arr = [1, 2, 3, 4];

Array.prototype.myPush = function(...items) {
  let O = Object(this)
  console.log("this<<", this)
  console.log('O<<',O)
  // let len = this.length >>> 0
  // let argsLen = items.length >>> 0
  let len = this.length
  let argsLen = items.length

  if(len + argsLen > 2 ** 53 - 1) {
    throw new TypeError("The number of array is over the max value")
  }
  for (let i = 0 ; i < argsLen ; i++) {
    O[len + i] = items[i]
  }
  let newLength = len + argsLen
  O.length = newLength
  return newLength
}

arr.myPush(3)