const wm1 = new WeakMap();
objm1 = {
  orderId: 'jshdghfsad',
  coustom: 'huangsq'
};objm1.__proto__ = null
objm2 = {
  orderId: 'jshdghfsad',
  coustom: 'huangsq'
};objm2.__proto__ = null
wm1.set(objm1, objm2)
console.log(wm1);