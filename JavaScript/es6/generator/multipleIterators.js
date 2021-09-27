function* multipleIterators() {
  let x = yield 2
  z++
  let y = yield(x*z)
  console.log(x, y, z)
}

let z=1

const it1 = multipleIterators(), it2 = multipleIterators()

let val1 = it1.next().value

let val2 = it2.next().value
console.log(val1)
console.log(val2)

val1 = it1.next(val2 *10).value
val2 = it2.next(val1 * 5).value
console.log(val1)
console.log(val2)