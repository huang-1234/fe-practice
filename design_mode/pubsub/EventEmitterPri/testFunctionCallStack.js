function sum(n) {
  if (1 === n) {
    return 1;
  } else {
    return n + sum.call(undefined,n-1)
  }
}
for (let i = 9000;i <= 1400000;i++) {
  console.log(i,':',sum(i));
}