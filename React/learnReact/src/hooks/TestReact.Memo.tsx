
import React, { useState, ReactElement } from 'react'
let num = 0; // 用于记录当前组件执行次数

export default (): ReactElement => {
  console.log('render num: ', ++num) // 打印执行次数

  let [count, setCount] = useState(0)

  const CountAddOne = () => {
    setCount(++count)
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={CountAddOne}>
        Button
      </button>
    </>
  )
}