class EventEmitter {
  _limit = 10;
  _event = {};
  constructor({ limit }) {
    this._limit = limit;
  }
  on(name, fn) {
    if (!this._event[name]) {
      this._event[name] = [fn];
    } else {
      this._event[name].push(fn);
    }
  }
  emit(name, fn) {

    if (!this._event[name]) {
      return;
    }
    if (!fn || typeof fn !== 'function') {
      this._event[name].forEach(cb => {
        cb();
      })
    } else {
      const idx = this._event[name].findIndex(f => f === fn);
      if (idx !== -1) {
        fn();
      } else {
        return;
      }
    }
  }
  off(name, fn) {
    if (!this._event[name]) {
      return;
    }
    if (!fn) {
      this._event[name] = [];
    } else {
      const idx = this._event[name].findIndex(f => f === fn);
      if (idx !== -1) {
        this._event = this._event.splice(idx, 1);
      }
    }
  }
}

const e = new EventEmitter();

const sqCb = () => {
  console.log('sqCb 11');
}

e.on('sq', sqCb);
e.on('sq', () => {
  console.log('first')
});
e.emit('sq');