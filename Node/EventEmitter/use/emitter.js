const { evtIns } = require('./base');
function eEmitter(eventName) {
  const _eventName = eventName ?? 'click';
  evtIns.emit(_eventName, {
    name: 'huangsq',
    age: 18
  });
}

module.exports = {
  eEmitter,
}