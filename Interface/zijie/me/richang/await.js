
async function getSum() {
  console.log(start);
  const getsum = new Promise((
    resolve => resolve(10000)
  )).then((res => {
    const sum = 0;
    for (let i = 0;i < res;i++){
      sum += 1;
    }
    return sum
  }))


  const sum = await getsum()
  console.log(sum);
}