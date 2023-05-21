/**
 * 8 实现接口最大并发
 */
{
  // arr -> 接口数组
  // max -> 最大并发数
  const poll = (arr, max) => {
    const run = () => {
        if (!arr.length) return
        const min = Math.min(arr.length, max)
        for (let i = 0; i < min; i++) {
            max--
            const item = arr.shift()
            Promise.resolve(item).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                max++
                run()
            })
        }
    }
    run()
  }
}
/**
 * 9 防抖
 */
{
  const debounce = (fn, delay) => {
    let timer = null
    return (...args) => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
  }
}
/**
 * 10 截流
 */
{
  const throttle = (fn, delay) => {
    let timer = null
    let startTime = 0
    return (...args) => {
        timer && clearTimeout(timer)
        const now = Date.now()
        if (now - startTime > delay) {
            fn.apply(this, args)
            startTime = now
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
  }
}