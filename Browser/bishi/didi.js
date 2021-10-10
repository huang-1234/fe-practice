function maxScore(num, array) {
  const arr = array.filter((val) => 0 !== val)
  const waittingArr = arr.sort((a, b) => a - b)
  console.log(waittingArr)
  const increasingArr = new Set(arr.sort((a, b) => a - b))
  return increasingArr.size;
}

const num = 5;
const arr = [1.3, 2, 1.5, 1.3, 1.5, 0]
console.log(maxScore(num, arr))

