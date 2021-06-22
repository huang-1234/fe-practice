
import React,{useState,useCallback, } from 'react'
import { ReactElement } from 'react'
import ChildrenComponent from './ChildrenComponent'

let num = 0;

export default React.memo((): ReactElement => {
  console.log('render num: ', ++num) // 打印执行次数
  let [count, setCount] = useState(0)

  const CountAddOne = useCallback(() => {
    console.log('看下这个函数useCallback(CountAddOne,[])')
    setCount(++count)
  }, [count])

  // const unChangeCount = useCallback(() => {
  //   console.log('看下这个函数useCallback(unChangeCount,[])')
  //   setCount(count)
  // }, [count])
  const unChangeCount =() => {
    console.log('看下这个函数useCallback(unChangeCount,[])')
    setCount(count)
  }

  return (
    <>
      <p>count: {count} </p>
    
      <ChildrenComponent />

      <button  onClick={CountAddOne}> CountAddOne  </button>
      <button  onClick={unChangeCount}> unChangeCount </button>
    </>
  )
})

