const p = new Promise((resolve,reject)=>{
  resolve('hello world')
});

p.then(
  (msg)=>{
    // foo.bar();
    console.log(msg)
  },
  (err)=>{
    console.log(err)
  }
)