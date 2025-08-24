new Promise((resolve, reject) => {
  reject(1)
}).catch(() => {
  console.log(2)
}).then(() =>
  console.log(3),
  (v) => console.log(v)
)