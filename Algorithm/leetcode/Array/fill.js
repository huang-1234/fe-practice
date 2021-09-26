const m = 5, n = 5;

let pre = new Array(m + 1).fill().map(()=>new Array(n+1).fill(0))

pre[0][2] = 5;
console.log(pre)