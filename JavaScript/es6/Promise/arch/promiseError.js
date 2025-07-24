const p = new Promise((resolve, reject) => {
  const flag = true;
  if (flag) {
    resolve({
      status: 'resolved',
      value: ' success'
    })
  } else {
    reject({
      status: 'rejected',
      value: ' error'
    })
  }

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