function foo(cb) {
  setTimeout(() => {
    try {
      const x = bax.bar();
      cb(null, x)
    } catch (err) {
      cb(err)
    }
  }, 1000);
}

foo(function (err, val) {
  if (err) {
    console.error(err)
  }else{
    console.log(val)
  }
})