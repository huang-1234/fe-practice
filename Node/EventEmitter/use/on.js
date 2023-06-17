const  EventEmitter =  require('node:events');
const e = new EventEmitter();

function eOn() {
  e.on('click', (e) => {
    console.log('on click', e)
  });
}

module.exports = {
  eOn,
}