let line;
while((line = readline()) != ''){
    let num = parseInt(line.trim());
    let a0 = 1, a1 = 1, a2 = 2;
    for(let i=0; i<num; i++){
        let t = a2;
        a2 = a2 + a1;
        a0 = a1;
        a1 = t;
    }
    console.log(a2)
}


// V8 版本
const fib = (num) => {
  const triple = [0, 0, 1];
  for (let i = 0; i < num; i++) {
      [triple[0], triple[1], triple[2]] = [triple[1], triple[2], triple[1] + triple[2]];
  }
  return triple[2];
};

print(fib(parseInt(readline())));


// node banben
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        let dp = [1,1,2]
        for (let i = 3; i < n+1; i++) {
            dp[i]= dp[i-1]+dp[i-2]
        }
        console.log(dp[n])

    }
})
