// 在此感谢Benjamin Gruenbaum （@benjamingr on GitHub）的巨大改进！
function run(gen) {
  var args = [].slice.call(arguments, 1), it;
  // 在当前上下文中初始化生成器
  it = gen.apply(this, args);
  // 返回一个promise用于生成器完成
  return Promise.resolve()
    .then(function handleNext(value) {
      // 对下一个yield出的值运行
      var next = it.next(value);
      return (function handleResult(next) {
        // 生成器运行完毕了吗？
        if (next.done) {
          return next.value;
        }
        // 否则继续运行
        else {
          return Promise.resolve(next.value)
            .then(
              // 成功就恢复异步循环，把决议的值发回生成器
              handleNext,
              // 如果value是被拒绝的 promise，
              // 就把错误传回生成器进行出错处理
              function handleErr(err) {
                return Promise.resolve(it.throw(err))
                  .then(handleResult);
              }
            );
        }
      })(next);
    });
}

module.exports = {
  run
}