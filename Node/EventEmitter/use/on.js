const { evtIns } = require('./base');
function eOn(eventName) {
  const _eventName = eventName ?? click;
  evtIns.on(_eventName, (e) => {
    console.log(`on ${_eventName}`, e)
  });
}

module.exports = {
  eOn,
}