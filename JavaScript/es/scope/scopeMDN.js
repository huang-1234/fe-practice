function makeFunc() {
  var name1 = "Mozilla";
  function displayName() {
    console.log(name1);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();