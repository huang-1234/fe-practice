

const permutation = function (s: string) {
  let answer: string[] = [];
  const sLen: number = s.length;
  function backtrack(ans: string, str: string, i: number) {
    if (i === sLen) {
      answer.push(ans)
      return
    }
    for (let j = 0;j < str.length;j++){
      backtrack(ans+str[i], str.substring(j+1, str.length), i+1)
    }
  }
  backtrack('', s, 0)
}