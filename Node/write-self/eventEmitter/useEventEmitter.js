const { EventEmitter } = require("events");
const insEvm = new EventEmitter();
const func1 = (...args) => {
  console.log("on1", args.length, args);
}
insEvm.addListener("data", func1);


const func2 = (...args) => {
  console.log('on2', args)
};
insEvm.prependOnceListener('data',func2)

insEvm.emit("data", 1, 2, 3);
insEvm.emit("data", 1, 2, 3);