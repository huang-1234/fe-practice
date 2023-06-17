const { eOn } = require('./on')
const { eEmitter } = require('./emitter');

eOn();
eEmitter();

console.log('e', eOn, eEmitter)