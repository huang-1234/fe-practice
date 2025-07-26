/**
 * @fileOverview 基数质数
 * @param {number} n
 */
class BasePrimes {
  /**
   * @type {number[]}
   */
  _primes = [];
  /**
   * @param {number} n
   */
  constructor(n = 2, should_init = false) {
    if (should_init) {
      this.init(n);
    }
    this.n = n;
    this.baseCache = new Map(); // 缓存基数素数
    this.rangeCache = new Map(); // 缓存查询结果
  }
  init(n) {
    this._primes = this.getPrimesInRange(2, n);
    return this;
  }
  /**
   *
   * @param {number} n
   * @returns
   */
  geneNumPrimes(n) {
    try {
      const sqrtNum = Math.floor(Math.sqrt(n));
      const isPrimes = new Uint8Array(n + 1).fill(1)
      for (let i = 2;i < sqrtNum;i++) {
        if (isPrimes[i - 2]) {
          for (let j = i * i;j <= n;j += i) {
            isPrimes[j - 2] = false;
          }
        }
      }
      return isPrimes.reduce((pre, cur, index) => {
        if (cur) {
          pre.push(index + 2);
        }
        return pre;
      }, []);
    } catch (error) {
      return error;
    }

  }
  /**
   * @desc 获取[2, n] 范围内的所有素数（基础筛法）
   * @param {number} n - 最大值
   * @returns {number[]} - 所有素数
   */
  getBasePrimes(n) {
    if (n < 2) {
      return [];
    }
    try {
      if (this.baseCache.has(n)) {
        return this.baseCache.get(n);
      }
      const isPrimes = new Uint8Array(n + 1).fill(1);
      isPrimes[0] = isPrimes[1] = 0;
      const nLen = isPrimes.length;
      for (let i = 2;i < nLen;i++) {
        if (isPrimes[i]) {
          for (let j = i * i;j <= n;j += i) {
            isPrimes[j] = 0;
          }
        }
      }
      const ans = Array.from({ length: n + 1 }, (v, i) => i).filter(i => isPrimes[i]);
      this.baseCache.set(n, ans);
      return ans;
    } catch (error) {
      console.log(`getBasePrimes: ${error}`);
      throw error;
    }
  }
  /**
   * @desc 获取区间内的质数
   * @param {number} a
   * @param {number} b
   * @satisfies a < b; 已经明确 a < b
   * @returns {number[]}
   */
  getPrimesInStrictRange(a, b) {
    try {
      if (a > b || b < 2) return [];
      let start = Math.max(a, 2);
      // 获取[2, √end]内的素数作为筛子基数
      const basePrimes = this.getBasePrimes(Math.floor(Math.sqrt(b)));
      const isPrime = new Uint8Array(b + 1).fill(1)
      const primes = [];
      if (start <= 2) primes.push(2);
      for (const p of basePrimes) {
        if (p === 2) continue;
        const firstMultiple = Math.max(Math.ceil(start / p) * p, p * p);
        for (let i = firstMultiple;i <= b;i += p) {
          if (i >= start) {
            isPrime[i - start] = 0;
          }
        }
      }
      // 收集素数结果（跳过偶数）
      for (let i = start % 2 ? start : start + 1;i <= b;i += 2) {
        if (isPrime[i - start]) {
          primes.push(i);
        }
      }
      return primes;
    } catch (error) {
      console.error(`getPrimesInStrictRange: ${error?.message}`);
      throw error;
    }
  }
  /**
   * @desc 获取指定范围内的质数
   * @param {number} a
   * @param {number} b
   * @returns  {number[]}
   */
  getPrimesInRange(a, b) {
    if (b < 2) return [];
    const low = Math.max(2, a);
    if (b < low) return [];
    return this.getPrimesInStrictRange(low, b)
  }
  * chunkedSieve(start, end, chunkSize = 1e6) {
    for (let chunkStart = start;chunkStart <= end;chunkStart += chunkSize) {
      const chunkEnd = Math.min(chunkStart + chunkSize - 1, end);
      yield this.getPrimesInStrictRange(chunkStart, chunkEnd);
    }
  }
}

function formatLargeNumber(n) {
  const units = ['', '万', '亿', '万亿', '京', '垓'];
  const exponents = [0, 4, 8, 12, 16, 20];

  for (let i = exponents.length - 1;i >= 0;i--) {
    if (n >= 10 ** exponents[i]) {
      return (n / 10 ** exponents[i]).toFixed(2) + units[i];
    }
  }
  return n.toString();
}
const target0 = 200;
const target2 = 9; // 十
const target3 = 99; // 百
const target4 = 999; // 千
const target5 = 9999; // 万
const target6 = 99999; // 十万
const target7 = 999999; // 一百万
const target8 = 9999999; // 一千万
const target9 = 99999999; // 一亿
const target10 = 999999999; // 一十亿
const target11 = 9999999999; // 一百亿
const target12 = 99999999999; // 一千亿
const target13 = 999999999999; // 一万亿
const target14 = 9999999999999; // 十万亿
[
  target0,
  // target1,
  // target2, target3,
  // target4
].forEach(target => {
});

const METHOD = {
  slow: 'slow',
  fast: 'fast'
}
/**
 * @param {number} target
 */
function calcDurationInCalcPrimes(target, method = METHOD.slow) {
  const basePrimes = new BasePrimes()
  const now = Date.now();
  let duration = 0;
  try {
    if (method === METHOD.slow) {
      const a = basePrimes.geneNumPrimes(target)
      // console.log('BasePrimes', a)
      duration = Date.now() - now;
    } else if (method === METHOD.fast) {
      const b = basePrimes.getPrimesInStrictRange(0, target)
      // console.log('BasePrimes', b)
      duration = Date.now() - now;
    } else {
      console.log(method)
      throw new Error('method error')
    }
  } catch (error) {
    console.log(error)
    throw error
  }
  console.log(`target length is ${String(target).length}, that use method is ${method}  duration is ${duration} ms`)
}
const t = target10
//
calcDurationInCalcPrimes(t, METHOD.fast)
// 普通方法
calcDurationInCalcPrimes(t, METHOD.slow)
BasePrimes.prototype.findPreNumPrimes = function (n) {
  const primes = [];
  for (let i = 2;i <= n;i++) {
    if (primes.every(prime => i % prime)) {
      primes.push(i);
    }
  }
  return {
    primes,
    count: primes.length
  };
}
/**
 *
 * @param {number} n
 * @returns
 */
BasePrimes.prototype.isPrime = function (n) {
  for (let i = 2;i < n;i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
/**
 *
 * @param {number[]} primes
 */
BasePrimes.prototype.findAllNoPrimes = function (primes) {
  return primes.filter(prime => !this.isPrime(prime));
}
/**
 * @desc 找到一个数的所有因数
 * @param {number} n
 */
BasePrimes.prototype.findNumAllFactors = function (n) {
  let factor = [];
  for (let i = 2;i < n;i++) {
    if (n % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}
/**
 * @desc 找到多个数所有因数
 * @param {number[]} nums
 */
BasePrimes.prototype.findNumsAllFactors = function (nums) {
  const factors = new Map();
  for (let i = 0;i < nums.length;i++) {
    factors.set(nums[i], this.findNumAllFactors(nums[i]));
  }
  return factors;
}

const primes26 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113
]