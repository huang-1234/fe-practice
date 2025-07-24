(() => {
  const t = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39
  ]

  const n = 56;

  const lexicalOrder = function (n) {
    const ret = [];
    let number = 1;
    for (let i = 0;i < n;i++) {
      ret.push(number);
      if (number * 10 <= n) {
        number *= 10;
      } else {
        while (number % 10 === 9 || number + 1 > n) {
          number = Math.floor(number / 10);
        }
        number++;
      }
    }
    return ret;
  };

  console.log(lexicalOrder(99))
})()