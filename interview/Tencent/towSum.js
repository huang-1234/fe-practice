
/* 
  @arr : new Array()
  @target : number
  @return : new Array() | -1
*/
function getTowSum(arr, target) {
  
  const arrLen = arr.length;
  let AnsArr = new Array();
  
  let arrMap = {}
  for (let i = 0;i < arrLen;++i){
    const index = target - arr[i];
    console.log('index', index);
    if (!arrMap[index]) {
      arrMap[index] = i;
    } else {
      const j = arr.indexOf(index);
      AnsArr.push([i,j])
    }
  }
  console.log('arrMap------------:', arrMap);
  if (!AnsArr.length) {
    return -1;
  } else {
    return AnsArr;
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(getTowSum(arr,6));