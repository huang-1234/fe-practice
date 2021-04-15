function Shape() {
  this.height = 10;
  this.width = 10;
  this.area = function () {
    return this.height * this.width;
  };
};
var shape = new Shape();

console.log(Function.prototype);