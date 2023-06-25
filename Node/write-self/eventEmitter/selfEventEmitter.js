/**
 * eventEmitter
 */
const toString = Object.prototype.toString;

function getType(t) {
  const type = toString.call(t).slice(8, -1);
  return type;
}
function isFunc(t) {
  return 'Function' === getType(t)
}
function isString(t) {
  return 'String' === t;
}

function checkType(name) {
  const realNameTypes = ['String', 'Symbol', 'Undefined'];
  const nowNameType = getType(name);
  if (-1 === realNameTypes.includes(nowNameType)) {
    throw new Error(`your ${name} is ${nowNameType}, it would be ${realNameTypes}`)
  }

}
class SelfEventEmitter {
  constructor() {
    this._events = Object.create(null);
    this._onceCbMap = new Map();
    this._count = 0;
    this._maxCount = 20;
    this._nil = -1;
  }
  onPre(name, cb) {
    if (!this._events[name]) {
      this._events[name] = [cb];
    } else {
      this._events[name].unshift(cb);
    }
  }
  on(name, cb, pre) {
    if (!isFunc(cb)) {
      return;
    }
    if (!this._events[name]) {
      this._events[name] = [cb];
      this._count++;
    } else {
      if (pre) {
        this.onPre(name, cb)
      } else {
        this._events[name].push(cb);
      }
    }
  }
  addListener = this.on
  off(name, cb) {
    if (!this._events[name]) {
      return this._nil;
    }
    if (isFunc(cb)) {

      const realCb = this._onceCbMap.get(cb) || cb;
      const idx = this._events[name].findIndex((fn) => fn === realCb);
      if (-1 !== idx) {
        this._events[name].splice(idx, 1);
        console.log('off', idx, this._events[name])
        return idx;
      }
      return idx;
    }
    this._events[name] = null;
  }
  emit(name, ...args) {
    if (!this._events[name]) {
      return false;
    }
    const [cb, ..._args] = args;
    if (isFunc(cb)) {
      const funcIdx = this._events[name].findIndex(function (fn) {
        return fn === cb || fn?.cb === cb
      });
      if (-1 !== funcIdx) {
        this._events[name][funcIdx](..._args);
      } else {
        cb(..._args)
      }
      return;
    }
    this._events[name].forEach(fn => {
      isFunc(fn) && fn(...args);

      console.log('emit', this._events[name])
    });
    return true;
  }
  emitOnce(name, ...args) {
    this.emit(name, ...args);
    this.off(name)
  }
  asyncEmit(name, ...args) {
    return new Promise((resolve, reject) => {
      resolve(this.emit(name, ...args));
    })
  }
  once(name, cb) {
    const wrapCb = (...args) => {
      cb(...args);
      this._onceCbMap.delete(cb);
      this.off(name, wrapCb);
    }
    if (!this._events[name]) {
      this._events[name] = [];
    }
    this._onceCbMap.set(cb, wrapCb);
    this._events[name].push(name, wrapCb)
  }
  // bugs here
  prependOnceListener(name, cb) {
    const wrapCb = (...args) => {
      cb(...args);
      this._onceCbMap.delete(cb);
      this.off(name, wrapCb);
    }
    if (!this._events[name]) {
      this._events[name] = [];
    }
    this._onceCbMap.set(cb, wrapCb); // to fix bug
    this._events[name].unshift(wrapCb);
  }

  prependListener = this.onPre
  removeAllListeners(names) {
    const that = this;
    if (Array.isArray(names)) {
      names.forEach(function (_name) {
        that.off(_name);
      })
    } else if (isString(names)) {
      that.off(names);
    }
  }
  removeListeners(name, cb) {
    if (!isFunc(cb)) {
      this.off(name)
    } else {
      this.off(name, cb)
    }
  }
  eventNames() {
    return [...Object.keys(this._events)]
  }

}

const selfEv = new SelfEventEmitter();
const func1 = (name, age) => {
  console.log(`on1. name is ${name}, age is ${age}` )
}
selfEv.on('huangsq', func1);

const func2 = (name, age) => {
  console.log(`on2. name is ${name}, age is ${age}` )
}
selfEv.on('huangsq', func2);

selfEv.prependOnceListener('huangsq', (name, age) => {
  console.log(`on3. name is ${name}, age is ${age}` )
});
// selfEv.once('huangsq', (name, age) => {
//   console.log(`on3. name is ${name}, age is ${age}` )
// });
// selfEv.off('huangsq', func2)

// selfEv.emit('huangsq', func2, '1-1', '1-2')
// selfEv.emitOnce('huangsq', func2, 234, 232)
selfEv.emit('huangsq', 'huangsq', '19', (err) => {
  if (err) {
    console.log('===', err)
  }
  console.log('====')
})
selfEv.emit('huangsq', 'huangsq', '19');
// selfEv.emit('huangsq', 'huangsq', '19')