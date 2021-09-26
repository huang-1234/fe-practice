function a() {
  let i = 0;
  const PI = 3.14159265358979343846224338;
  let shouldOutThis = true;
  function b(radis = 0) {
    let i = 100;
    i++;
    if(shouldOutThis){
      console.log(this);
      shouldOutThis = false;
    }
    console.log(PI*radis*radis)
    console.log(i);
  };
  return b;
}



const c = a();
c(5);
c();
c();