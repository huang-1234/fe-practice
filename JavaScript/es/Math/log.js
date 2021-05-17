


class myMath{
  static log2(argu) {
    return argu.map((item) => {
      return Math.log2(item);
    })
  }
  static mytoString(array) {
    return array.map((item) => {
      return parseInt(item.toString(2))
    })
  }
}

let arr = [23,25,5,10]
let out = myMath.log2(arr);
console.log(out)

const out2 = myMath.mytoString(arr)
console.log(out2);

