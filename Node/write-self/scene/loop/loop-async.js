const {
  red,
  green,
  yellow,
  task,
} = require('./task');

const taskRunner =  async () => {
  await task(3000, 'red')
  await task(2000, 'green')
  await task(2100, 'yellow')
  taskRunner()
}
taskRunner()
