function debounce(method, context) {
  clearTimeout(method.tId)
  method.tId = setTimeout(() => {
    method.call(context)
  }, 1000)
}

function print() {
  console.log('Hello World')
}

window.onresize = debounce(print)
