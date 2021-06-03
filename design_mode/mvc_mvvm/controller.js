myapp.Controller = function () {
  var model = null,
    view = null;

  this.init = function () {
    /* 初始化Model和View */
    model = new myapp.Model();
    view = new myapp.View(this);

    /* View向Model注册，当Model更新就会去通知View啦 */
    model.register(view);
    model.notify();
  };

  /* 让Model更新数值并通知View更新视图 */
  this.increase = function () {
    model.add(1);
    model.notify();
  };

  this.decrease = function () {
    model.sub(1);
    model.notify();
  };
};