myapp.View = function (controller) {
  var $num = $('#num'),
    $incBtn = $('#increase'),
    $decBtn = $('#decrease');

  this.render = function (model) {
    $num.text(model.getVal() + 'rmb');
  };

  /*  绑定事件  */
  $incBtn.click(controller.increase);
  $decBtn.click(controller.decrease);
};