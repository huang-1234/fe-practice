const  EventEmitter =  require('node:events');
const e = new EventEmitter();

function eEmitter() {
  e.emit('click', {
    name: 'huangsq',
    age: 18
  });
}

module.exports = {
  eEmitter,
}