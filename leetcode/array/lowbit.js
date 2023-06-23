const td = new Array(10).fill().map((_, idx) => {
  if (false) {
    return idx * 2;
  } else {
    return idx + 1;
  }
});
console.log('nums', td);

class TreeArray {
  tree = [];
  constructor(nums) {
    this.init(nums);
  }
  lowbit(x) {
    return x & (-x);
  }

  add(i, delta) {
    let p = i;
    while (p < this.tree.length) {
      this.tree[i] += delta;
      p += this.lowbit(p);
    }
  }
  init(nums) {
    this.tree = [0, ...nums];

    const len = this.tree.length;
    console.log('len', len)
    for (let i = 1;i < len;i++){
      let p = i + this.lowbit(i);
      if (p < len) {
        this.tree[p] += this.tree[i];
      }
    }
    console.log('tree', this.tree)
  }
  preSum(i) {
    let [sum, p] = [0, i];
    while (p > 0) {
      sum += this.tree[p];
      p -= this.lowbit(p);
    }
    return sum;
  }
  sumRange(left, right) {
    const ans = this.preSum(right + 1) - this.preSum(left);
    return ans;
  }

}

function preSums(nums) {
  const len = nums.length;
  const treeArray = new TreeArray(nums);
  const res = new Array(len).fill(0);
  treeArray.tree.forEach((n, i) => {
    res[i] = treeArray.preSum(i);
  });
  return res;
}

console.log('preSums', preSums(td))
