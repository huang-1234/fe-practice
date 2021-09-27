const arr = [1, 2, 3, 1, 2, 555];
const arrSet = new Set()
const newArr = arr.filter((item) => {
  if (arrSet.has(item)) {
      return false
  } else {
    arrSet.add(item);
    return true
  }
})

console.log(newArr);