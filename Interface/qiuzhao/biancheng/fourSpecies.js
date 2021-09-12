function counter(input) {
  let exp = input.trim();
  const tokenArr = exp.split(' ');
  const operations = new Map().set('+', 1).set('-', 1).set('*', 2).set('/', 2)
  const tokenLen = tokenArr.length;
  const reg = /^(0 |[1-9][0-9]*)$/

  const digit = [];
  const stackOpe = [];
  let ans = parseInt(tokenArr[0])

  for (let i = 0;i < tokenLen;i++) {
    const flag = reg.test(tokenArr[i]) || operations.has(tokenArr[i]);
    if (!flag) {
      return 0;
    }
    if (operations.has(tokenArr[i])) {
      const opeLen = operations.size
      // 当前运算符的优先级比栈内的优先级要高, 所以直接进运算符进栈
      if (opeLen === 0 || operations.get(tokenArr[i]) > operations.get(stackOpe[opeLen - 1])) {
        stackOpe.push(tokenArr[i]);
      } else {
        // 出栈并进行计算，知道栈内的运算符的邮箱低于的当前运算符的优先级为止
        while (operations.get(tokenArr[i]) < operations.get(stackOpe[opeLen - 1])) {
          const key = stackOpe.pop();
          switch (key) {
            case '*':
              ans = ans * parseInt(digit.pop());
              break;
            case '/':
              ans = (ans / parseInt(digit.pop())) | 0;
              break;
            case '+':
              ans = ans + parseInt(digit.pop());
              break;
            case '-':
              ans = ans - parseInt(digit.pop());
              break;
          }
        }
        stackOpe.push(tokenArr[i]);
      }

    } else {
      digit.push(tokenArr[i]);
    }
  }
  return ans;
}

console.log(counter('1 + 1'))