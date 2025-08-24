const root = {
  a() {
    console.log(this)
  },
  b: () => {
    console.log(this)
  }
}
function main() {
  const jsEnv = {
    isBrowser: () => typeof window !== 'undefined' && typeof window.document !== 'undefined',
    isNode: () => typeof process !== 'undefined' && process.versions && process.versions.node,
    isWebWorker: () => typeof self !== 'undefined' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope'
  }
  if (jsEnv.isBrowser()) {
    window.global = window
  } else {
    global = globalThis
  }
  const key = jsEnv.isNode() ? process.argv[2] : jsEnv.isWebWorker() ? self.location.search.substr(1) : window.location.search.substr(1)
  switch (key) {
    case 'root':
      root.a()
      root.b()
      break
    case 'fn':

      const fa = root.a
      // fa()
      const fb = root.b
      fb()
      break
    default:
      break
  }
}
main()