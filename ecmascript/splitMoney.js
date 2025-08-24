
// old
function getSeed() {
  const seed =  Math.random().toFixed(1);
  while(seed === 0 || seed === 1) {
    seed = Math.random().toFixed(1);
  }
  return seed;
}
/**
@微信红包分配算法
m元随机分配给n个人、不能某个人出现0元的情况、最小单位是0.01元
*/
function splitMoneyOld(m, n) {
  const allMoney = 100 * m;
  const oneMoney = (allMoney / n).toFixed(0);
  const seed = getSeed()
  console.log('seed', oneMoney)
  let result = new Array(n).fill(0);
  let remain = allMoney;
  let randomSeed = 2;
  // 最后一个需要调整；以及如果需要优化、可以在每次进行动态调整
  for (let i = 0; i < n - 1; i++) {
    let current = oneMoney * seed * randomSeed;
    while(current === 0) {
      current = oneMoney * seed * randomSeed;
    }
    result[i] = current;
    remain = remain - result[i];
    randomSeed = (remain / oneMoney) / (n - i) * n * 2;
  }
  result[n-1] = allMoney - remain;

  return result;
}
// new
function splitMoney(m, n) {
  // 参数校验（确保每人至少0.01元）
  if (m < 0.01 * n) throw new Error('总金额不足，每人至少0.01元');

  // 转为分计算避免浮点误差[9,10]
  let remain = Math.round(m * 100);
  const packets = new Array(n)
  /**
   * @desc 前n-1个红包分配;动态计算安全上限（保证剩余金额足够分配）
   */
  for (let i = 0;i < n - 1;i++) {
    /** @desc 随机红包金额[1,safeMax] */
    const safeMax = remain - (n - i - 1);
    // 二倍均值
    const avg = remain / (n - i);
    const max = Math.min(safeMax, Math.floor(avg * 2));

    // 生成至少1分的随机金额[3,5]
    const amount = Math.floor(Math.random() * (max - 1)) + 1;
    packets[i] = amount;
    remain -= amount;
  }
  // 最后一个红包
  packets[n - 1] = remain;

  // 洗牌保证公平性（先抢后抢概率相同）
  for (let i = packets.length - 1;i > 0;i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [packets[i], packets[j]] = [packets[j], packets[i]];
  }

  // 转为元单位并保留两位小数
  // return packets.map(amount => (amount / 100).toFixed(2));
  return packets.map(amount => (amount / 100));
}


if (typeof require === 'object' && require.main === module) {
  console.log(splitMoneyOld(100, 30));
}