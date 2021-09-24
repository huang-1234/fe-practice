
function deferTime(time) {
  const count = time * 1e5;
  console.log('time start')
  for (let i = 0; i < count; i++) {
    console.log(i+1);
  }
  console.log('time end');
}

deferTime(20);