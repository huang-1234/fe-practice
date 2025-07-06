const { insEvm } = require('./evtIns');

require('./on')

insEvm.emit("data", 1, 2, 3);
insEvm.emit("data", 1, 2, 3);
insEvm.emit("data", 1, 2, 3);

console.log(insEvm)