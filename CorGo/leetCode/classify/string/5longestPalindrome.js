/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (1 === s.length) return s;
  if (2 === s.length) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }

  sLen = s.length;
  const mid = parseInt(sLen / 2);
  // const c = s[mid]
  // console.log(c)
  // 向右移动的话，尽量以右边的为中心
  // let MaxPalindrome = 0;
  let idxL = 0, idxR = 0;
  for (let R = mid + 1;R < sLen;R++) {
    let RmaxPa = 0;
    for (let L1 = R - 1, R1 = R;L1 >= 0 || R1 < sLen;) {
      if (s[L1] === s[R1 + 1]) { // 以R1=mid+1为中心，向两边扩散
        L1--; R1++;
        const Length = R1 - L1;
        if (Length > RmaxPa) {
          RmaxPa = Length;
          idxL = L1; idxR = R1;
          continue;
        }
      }
      else {
        break;
      }
    }
  }
  // 向左移动的话，尽量以左边的为中心 
  for (let L = mid;L >= 0;L--) {
    let LmaxPa = 0;
    for (let L1 = L, R1 = L + 1;L1 >= 0 && R1 < sLen;) {
      if (s[L1 - 1] === s[R1]) { // 以L1=mid为中心，向两边扩散
        L1--; R1++;
        const Length = R1 - L1;
        if (Length > LmaxPa) {
          LmaxPa = Length;
          idxL = L1; idxR = R1;
          continue;
        }
      }
      else {
        break;
      }
    }
  }
  return s.substring(idxL, idxR);
};

const s = "babaddabab";
console.log(longestPalindrome(s))