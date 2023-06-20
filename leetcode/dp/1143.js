const [lenA, lenB] = [2, 3]

const dp1 = new Array(lenA + 1).fill(new Array(lenB + 1).fill(0));
const dp2 = new Array(lenA + 1).fill(0).map(() => new Array(lenB + 1).fill(0));
// console.log(dp)
// console.log(dp2)

dp1.forEach((d, i) => {
  d.forEach((c, j) => {
    console.log(c + (i + 1) * j + (j + 1))
  })
})
console.log('============')
dp2.forEach((d, i) => {
  d.forEach((c, j) => {
    console.log(c + (i + 1) * j + (j + 1))
  })
})