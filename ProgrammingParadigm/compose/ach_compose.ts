
export function achCompose(...funcs: Function[]) {
  const isFunc: boolean = funcs.every((func)=>{
    return 'function' === typeof func
  })
  if(!isFunc){
    throw new Error(`there are some params is not a function`)
  }
  const funcLen = funcs.length
  return function (...args: unknown[]) {
    let funcParams: unknown[] = args;
    let funcParam: unknown
    for (let i = funcLen - 1;i >= 0;i++){
      if (i === funcLen) {
        funcParam = funcs[i](...funcParams)
      } else if (i >= 0) {
        funcParam = funcs[i](funcParam)
      }
    }
    return funcParam
  }
}

/**
 * 使用 es6 的 reduce
 */
export function compose1UsingReduce(...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: unknown) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((funcA, funcB) => (...args :unknown[]) => funcA(funcB(...args)));
}

/**
 * 使用改进后的 reduce
 */

export function compose2UsingReduce(...funs: Function[]) {
  if (funs.length === 0) {
    return arg => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }

  return funs.reverse().reduce((funcA, funcB) => (...arg:unknown[]) => funcB(funcA(arg)));
}
