//line=readline()
//print(line)
class EventBus {
  constructor() {
    this.eventMap = {}
  }
  on(eventName, fn) {
    Object.prototype.toString.call(fn).slice(8, -1)
    if (!(fn instanceof Function)) {
      throw new Error(`${fn} is not find`)
    }
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = []
    }
    this.eventMap[eventName].push(fn)
  }
  emit(eventName, params) {
    if (!this.eventMap[eventName]) {
      throw new Error(`${eventName} is not exist`)
    }
    this.eventMap[eventName].forEach((cb) => {
      cb(params)
    })
  }

  off(eventName, fn) {
    if (!this.eventMap[eventName]) {
      throw Error(`error`)
    }
    if (~this.eventMap[eventName].indexOf(fn)) {
      this.eventMap[eventName].splice(this.eventMap[eventName].indexOf(fn), 1)
    } else {
      throw new Error(`${fn} is not find`)
    }
  }
}

const myEvent1 = new EventBus()

myEvent1.on('click', function (params = 'hello') {
  console.log(params);
})
myEvent1.on('click', function (params = 'world') {
  console.log(params);
})
myEvent1.emit('click')