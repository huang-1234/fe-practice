const module1 = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = module1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX());
// expected output: 42