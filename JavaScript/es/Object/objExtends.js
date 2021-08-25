const obj1 = {
  name: 'huang',
  lastName: 'sq'
}
const obj2 = {
  name: 'huangsq'
}

const obj = {
  ...obj1,
  ...obj2
}
console.log(obj);