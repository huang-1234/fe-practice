let arr = new Array(3)
for (let i = 0;i < 3;i++){
  arr[i] = new Array(3).fill(0)
}
arr[1][1] = 1
arr[1][2] = 2
console.log(arr)