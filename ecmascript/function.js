// copy function


function copyFunction(source, target) {
  target = target || {};
  console.log('copyFunction', target.toString())

}


function fa() {
  console.log(this.caller)
}

const source = {
  a: 1
}

fa()

// copyFunction(source, fa)