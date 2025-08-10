class SegmentedPrimeSieve {
  static BLOCK_SIZE = 1e6; // 每块1百万元素
  constructor(blockSize = SegmentedPrimeSieve.BLOCK_SIZE) {
    SegmentedPrimeSieve.BLOCK_SIZE = blockSize;
    this.primes = [];
    this.sieve = new Uint32Array(SegmentedPrimeSieve.BLOCK_SIZE).fill(true);
    this.sieve[0] = this.sieve[1] = false;
  }

  static *generatePrimes(start, end) {
    const sqrtEnd = Math.sqrt(end);
    const basePrimes = new BasePrimes().getBasePrimes(sqrtEnd);

    // 分块处理
    for (let blockStart = start;blockStart <= end;blockStart += this.BLOCK_SIZE) {
      const blockEnd = Math.min(blockStart + this.BLOCK_SIZE - 1, end);
      yield* this._processBlock(blockStart, blockEnd, basePrimes);
    }
  }

  static *_processBlock(start, end, basePrimes) {
    const size = end - start + 1;
    const sieve = new Uint8Array(size).fill(1);

    for (const p of basePrimes) {
      if (p === 2) continue;

      let firstMultiple = Math.ceil(start / p) * p;
      if (firstMultiple < p * p) firstMultiple = p * p;
      if (firstMultiple > end) continue;

      for (let num = firstMultiple;num <= end;num += p) {
        sieve[num - start] = 0;
      }
    }

    // 生成当前块的素数
    for (let i = 0;i < size;i++) {
      const num = start + i;
      if (num < 2) continue;
      if (sieve[i]) yield num;
    }
  }
  testGenePrimes(start = 0, end = 1e8, blockSize = 1e3) {
    // 使用示例
    const primeGenerator = SegmentedPrimeSieve.generatePrimes(start, end);
    let primes200 = []
    for (const prime of primeGenerator) {
      if (primes200.length < blockSize) {
        primes200.push(prime);
      } else {
        console.log('primes200', primes200)
        primes200 = []
      }
    }
  }
}

new SegmentedPrimeSieve(1e6).testGenePrimes();