

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (str, k) {
  const UpperReverseStr = []
  for (let i = 0, len = str.length;i < len;i++) {
    if ('a' <= str[i] && 'z' >= str[i]) {
      UpperReverseStr.push(str[i].toUpperCase())
    }else if('-' === str[i]){
      continue;
    } else {
      UpperReverseStr.push(str[i])
    }
  }
  const ursLen = UpperReverseStr.length;
  const resStr = []
  const klen = ursLen / k | 0, restLen = ursLen % k;
  let i = 0;
  if (0 !== restLen) {
    resStr.push(UpperReverseStr.slice(i, i + restLen).join(""))
  }
  for (i = restLen;i < klen * k;i += k) {
    resStr.push(UpperReverseStr.slice(i, i + k).join(""))
  }
  console.log(resStr)
  return resStr.join("-")
};

const str = "5F3Z-2e-9-wk";
const k = 4
console.log(licenseKeyFormatting(str, k))