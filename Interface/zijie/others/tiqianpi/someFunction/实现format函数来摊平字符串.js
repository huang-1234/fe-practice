function format(str) {
  let result = ''
  let strList = str.match(/\(([^)]*)\)/g);
  console.log(strList);
  strList = strList.map(item => {
    return item.slice(1, item.length - 1)
  })
  let nums = str.match(/\d+(\d+)?/g)
  console.log(nums);
  strList.forEach((item, index) => {
    result += item.repeat(parseInt(nums[index]))
  })
  return result
}
console.log(format(`3(x)2(yz)1(x)`));