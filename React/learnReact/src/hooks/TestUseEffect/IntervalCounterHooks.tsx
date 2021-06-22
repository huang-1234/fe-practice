import React, { useState, useEffect } from 'react'

function IntervalCouterHooks() {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  /* 传入空的依赖数组 []，意味着该 hook 只在组件挂载时运行一次，并非重新渲染时。但如此会有问题，在 setInterval 的回调中，count 的值不会发生变化。因为当 effect 执行时，我们会创建一个闭包，并将 count 的值被保存在该闭包当中，且初值为 0。每隔一秒，回调就会执行 setCount(0 + 1)，因此，count 永远不会超过 1。
解法一：这里我们不能将 useEffect 的第二个参数设置为空数组，而是 [count]。
指定 [count] 作为依赖列表就能修复这个 Bug，但会导致每次改变发生时定时器都被重置。事实上，每个 setInterval 在被清除前（类似于 setTimeout）都会调用一次。但这并不是我们想要的。要解决这个问题，我们可以使用 setState 的函数式更新形式。它允许我们指定 state 该如何改变而不用引用当前 state，即下面的解法二
 */
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalCouterHooks

