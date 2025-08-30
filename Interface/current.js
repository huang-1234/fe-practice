// publish on

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(name, fn) {
    if (typeof fn !== 'function') {
      return new Error('not func')
    }
    if (!this.events.has(name)) {
      this.events.set(name, [fn])
    } else {
      this.events.get(name)?.push(fn)
    }
  }
  emit(name, fn, ...args) {
    if (!this.events.has(name)) {
      return new Error('')
    }
    /**
     * @type {Function[]}
     */
    const targetFns = this.events.get(name) || [];
    if (typeof fn === 'function') {
      const targetFn = targetFns.find(innerFn => innerFn === fn);
      if (typeof targetFn === 'function') {
        targetFn(args);
        this.off(name, fn)
      }
    } else {
      targetFns?.forEach(_fn => _fn())
      this.events.clear();
    }
  }
  off(name, fn) {
    if (!this.events.has(name)) {
      return new Error('')
    } else {
      if (!fn) {
        this.events.clear()
      }
      if (typeof fn === 'function') {
        const fns = this.events?.get(name) || [];
        const targetIdx = fns?.find((f) => f === fn)
        if (target !== -1) {
          // 从targetIdx 开始、移除一个函数
          this.events.set(name, fns?.splice(targetIdx, 1))
        }
      } else {
        return new Error('')
      }
    }
  }
}

const event1 = new EventEmitter()
function event1Fn1 (){
  console.log('event1Fn1')
}
event1.on('event1', event1Fn1)
event1.emit('event1')