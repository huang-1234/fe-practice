const originArr = [1, 2, 3, 4, 5, 6]

function reserve(arr) {
  arr[0] = 45
}

reserve(originArr)
console.log(originArr);