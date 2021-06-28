const eventloop = {
  queue: [],
  timroutQueue: [],
  fsQueue:[],
  loop() {
    while (this.queue.length) {
      let callback = this.queue.unshift()
      callback()
      
    }
    setTimeout(this.loop.bind(this),50)
  },
  add(callback) {
    this.queue.push(callback)
  }
}


setTimeout(() => {
  eventloop.add(() => {
    console.log('write file');
  })
}, 500);
setTimeout(() => {
  eventloop.add(() => {
    console.log('write file end');
  })
}, 500);

eventloop.loop();