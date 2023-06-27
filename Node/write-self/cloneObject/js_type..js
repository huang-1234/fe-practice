
const originObj = {
  insDate: new Date(),
  insRegExp: new RegExp(/(?!^)(?=(\d{3})+$)/),
  insFunc: (...args) => {
    console.log('args', args);
    return {}
  },
  insArray: [1, 2, 3],
  insObj: {
    a: 'a',
    [Symbol('a')]: 'a',
    cO: {
      originObj: 'originObj',
    }
  },
  num: 1,
  str: String('string'),
  undefined: undefined,
  null: null,
  bigInt: BigInt(83485762836537264673),
}

// console.log(Object.values(originObj).forEach((val, idx) => {
//   if (val) {
//     console.log(`in idx:${idx}, it's val is ${val}`);
//     if (val.constructor) {
//       console.log(`in idx:${idx}, it's val constructor is ${val.constructor}`)
//     }
//   } else {
//     console.log(`in idx:${idx}, it's val haven't constructor ; ${val}`)
//   }
// }));