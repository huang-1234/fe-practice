async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
