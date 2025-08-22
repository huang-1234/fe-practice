
/* 
  @arr : new Array()
  @target : number
  @return : new Array() | -1
*/
function getTowSum(arr, target) {

  let arrHash = new Array(2*len).fill(-1)
  function Hash(arr) {
    for (let i = 0;i < len;++i){
      if (arr) {
        
      } else {
        const remainder = arr[i] % len;
        arrHash[remainder] = i;
      }
    }
  }
  Hash(arr);
  
  const arrLen = arr.length;
  let AnsArr = new Array();
  
  for (let i = 0;i < arrLen;++i){
    const key = target - arr[i];
    console.log('key', key);
    if (!arrHash[key]) {
      arrHash[key] = i;
    } else {
      // const j = arr.keyOf(key);
      const value = target - arrHash.has(key);
      const j = arr.keyOf(value);
      AnsArr.push([i,j])
    }
  }
  console.log('arrHash------------:', arrHash);
  if (!AnsArr.length) {
    return -1;
  } else {
    return AnsArr;
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(getTowSum(arr,3));