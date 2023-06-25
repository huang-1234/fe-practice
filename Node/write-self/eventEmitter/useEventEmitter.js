const { EventEmitter } = require("events");
const insEvm = new EventEmitter();

insEvm.addListener("data", (...args) => {
  console.log("data", args.length, args);
});



insEvm.once('data', (...args) => {
  console.log('args', args)
})

insEvm.emit("data", 1, 2, 3);
insEvm.emit("data", 1, 2, 3);