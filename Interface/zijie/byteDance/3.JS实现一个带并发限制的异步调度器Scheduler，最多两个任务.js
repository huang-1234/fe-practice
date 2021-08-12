class Scheduler {
  constructor() {
      this.needRunTasks = []
      this.runTasks = []
  }
  add(prmoiseFn) {
      return new Promise((resolve, reject) => {
          prmoiseFn.resolve = resolve; //保存Promise状态,现在不能执行
          if (this.runTasks.length < 2) {
              this.run(prmoiseFn)
          } else {
              this.needRunTasks.push(prmoiseFn)
          }
      })
  }
  run(prmoiseFn) {
      this.runTasks.push(prmoiseFn)
      prmoiseFn().then(() => {
          prmoiseFn.resolve()
          this.runTasks.splice(this.runTasks.indexOf(prmoiseFn), 1) //移除执行后的任务
          if (this.needRunTasks.length > 0) {
              this.run(this.needRunTasks.shift())
          }
      })
  }
}
const timeout = (time) =>
  new Promise(resolve =>
    setTimeout(resolve, time)
  )
const scheduler = new Scheduler()
const addTask = (time, order) =>
  scheduler.add(() =>
    timeout(time)
  ).then(() =>
    console.log(order)
  )

addTask(400, 4)
addTask(200, 2)
addTask(300, 3)
addTask(100, 1)