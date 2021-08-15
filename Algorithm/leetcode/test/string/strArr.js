
const s = 'huangsq';
const sLen = s.length
let arr = new Array()
for (let i = 0;i < sLen;i++){
  arr[s[i]] = i;
}
console.log(arr);
arr = arr.slice(2,4)
console.log(arr);