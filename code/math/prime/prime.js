// 仅供参考

const countPrimes = function (n) {
  // 布尔数组，初始时所有下标对应的值都为 true
  const isPrime = new Array(n).fill(true);
  // 从下标为 2 的数开始枚举
  for (let i = 2;i < n;i++) {
    // 若该下标对应的数为素数，则将其倍数的下标对应的值全部变为 false
    if (isPrime[i]) {
      for (let j = 2 * i;j < n;j += i) {
        isPrime[j] = false;
      }
    }
  }
  // 遍历一遍布尔数组，数出素数的个数
  let count = 0;
  const primeList = new Array(Math.floor(Math.sqrt(n))).fill(0);
  let p = 0;
  for (let i = 2;i < n;i++) {
    if (isPrime[i]) {
      count++;
      primeList[p++] = i;
    }
  }
  return {
    count,
    primeList,
  };
};


console.log(countPrimes(10_0000))

