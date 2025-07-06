
const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === 'red') {
      red()
    }
    else if (light === 'green') {
      green()
    }
    else if (light === 'yellow') {
      yellow()
    }
    callback()
  }, timer)
}

const step = () => {
  task(3000, 'red', () => {
    task(2000, 'green', () => {
      task(1000, 'yellow', step)
    })
  })
}
step();
