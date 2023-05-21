const EventLib = {
  init: 'init'
}
class Lib extends require('events').EventEmitter {
  constructor () {
    super()
    this.emit(EventLib.init);
    console.log('init constructor')
    /**
     * 因为上述的代码在实例化Lib对象时是同步执行的，在实例化完成以后就立马发送了init事件。
      而这时在外层的主程序还没有开始执行到lib.on('init')监听事件的这一步。
      所以会导致发送事件时没有回调，回调注册后事件不会再次发送。
      我们可以很轻松的使用process.nextTick来解决这个问题：
     */
    process.nextTick(_ => {
      this.emit(EventLib.init)
    })
  }
}

const lib = new Lib()

lib.on('init', _ => {
  // 这里将永远不会执行
  console.log('init!')
});
// lib.emit(EventLib.init)