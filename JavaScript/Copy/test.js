function checkType() {
  let reg = /\d*$/;
  let out = Object.prototype.toString.call(()=>{} );
  console.log(out);
}
checkType(1,2)