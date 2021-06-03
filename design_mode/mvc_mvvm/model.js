


myapp.Model = function () {
  var val = 0;

  this.add = function (v) {
    if (val < 100) val += v;
  };

  this.sub = function (v) {
    if (val > 0) val -= v;
  };

  this.getVal = function () {
    return val;
  };

  // ／* 观察者模式 *／
  var self = this,
    views = [];

  this.register = function (view) {
    views.push(view);
  };

  this.notify = function () {
    for (var i = 0;i < views.length;i++) {
      views[i].render(self);
    }
  }
}