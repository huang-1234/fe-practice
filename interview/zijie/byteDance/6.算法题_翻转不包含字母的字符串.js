/**
 * const str = '123abd3-adfz-34-akjkfaf';
 * function reverseStr(str) {
 *}
 * 输出：321abd-3adfz-43-akjkfaf
 */

{
  function reverseStr(str) {
    let res = ""
    let needReserve = ""
    function ReserveNotAlp(needReserve) {
      for (let i = needReserve.length - 1;i >= 0;i--) {
        res += needReserve[i]
      }
    }
    for (let i = 0;i < str.length;i++) {
      if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {//碰到字母不翻转
        ReserveNotAlp(needReserve)
        res += str[i]
        needReserve = ""
      } else {
        needReserve += str[i]
      }
    }
    return res;
  }

  console.log(reverseStr('123abd3-adfz-34-akjkfaf'))
}