

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(str, k) {
  const UpperReverseStr = str.toUpperCase().split("-").reverse().join("").split("")
  const UrsLen = UpperReverseStr.length;
  const resStr = []
  const klen = UrsLen / k | 0;
  let i = 0;
  for (;i < klen*k; i+=k){
    resStr.push(UpperReverseStr.slice(i,i+k).join(""))
  }
  if (i < UrsLen) {
    resStr.push(UpperReverseStr.slice(i,UrsLen ).join(""))
  }
  return resStr.reverse().join("-")
};

licenseKeyFormatting(`5F3Z-2e-9-w`, 2)