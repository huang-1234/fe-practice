// const a = -3.5;
// const b = a | 0;
// const c = Math.floor(a)
// console.log(b);
// console.log(c)

const envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]]
var maxEnvelopes = function (envelopes) {
  const compare = (a, b) => a[0] - b[0];
  envelopes.sort(compare)
};
maxEnvelopes(envelopes);
console.log(envelopes);