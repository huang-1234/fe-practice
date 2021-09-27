
const arr = [1,2,3,4,5,6,7,8,9];
const it1 = arr[Symbol.iterator]();
for(; !it1.next().done; ){
  console.log(it1.next().value)
}