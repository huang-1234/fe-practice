
/*
const Singleton = (function () {
  let _instance;
  return function (obj) {
    return _instance || (_instance = obj);
  }
})();
var a = new Singleton({
  x: 1
});
var b = new Singleton({ y: 2 });
console.log(a === b);
 */

{
  /* 案例二：解决 var 在 for + setTimeout 混合场景中的BUG */
  let i=999
  for (let i = 1;i <= 5;i++) {
    setTimeout(function () {
      console.log(i);
    }
      , i * 300);
  }
}