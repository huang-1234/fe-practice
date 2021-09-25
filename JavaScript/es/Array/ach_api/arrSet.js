let array = [1, 2, 3, 4, 4, 5, 5, 6]
~function uniq() {
  let result = []
  let hash = {}
  for (let i=0; i<array.length; i++) {
    hash[array[i]] = true
  }
  for (let key in hash) {
    result.push(key)
  }
  console.log(result)
  return result
}()