/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let m = s.length;
  let n = t.length;

  if (m < n) {
    return "";
  }
  let book = new Array(256).fill(0);  //book[index] = 0,表示该字符不被需要； > 0 说明需要该字符；< 0 说明该字符有多
  let num = 0;
  for (let tt of t) {
    book[tt.charCodeAt()]++;
    num++;
  }

  let l = 0, r = 0;
  let ansL = 0, ansR = 0;
  let minLen = Number.MAX_VALUE;
  while (r < m) {
    //判断是否还需要该字母
    if (book[s[r].charCodeAt()] > 0) {
      num--;
    }
    book[s[r].charCodeAt()]--;
    if (num == 0) {
      while (!num) {
        l++;
        book[s[l - 1].charCodeAt()]++;   //将滑出的字母拿回
        if (book[s[l - 1].charCodeAt()] > 0) {
          num++;
        }
      }
      if ((r - l + 2) < minLen) {
        minLen = r - l + 2;
        console.log('minLen', minLen)
        ansL = l - 1;
        ansR = r;
      }
    }
    r++;
  }
  return minLen == Number.MAX_VALUE ? "" : s.substring(ansL, ansR + 1);
};