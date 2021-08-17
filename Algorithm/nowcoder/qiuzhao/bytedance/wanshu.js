//line=readline()
//print(line)
console.log('Hello World!');


function is(num) {
  const a = [];
  for (let i = 1;i < num;i++) {
    if (num % i == 0) {
      a.push(i);
    }
  }
  let res = 0;
  a.forEach(val => {
    res += val;
  })

  return res === num;
}

function f() {
  const res = [];
  for (let i = 1;i <= 1000;i++) {
    if (is(i)) res.push(i);
  }
  console.log(res)
}

f()