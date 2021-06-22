import React,{ ReactElement } from "react"


// export default React.memo((): ReactElement => {
//   console.log('children render')

//   return <div>children component</div>
// })

function ChildrenComponent():ReactElement {
  console.log('children render')

  return (
    <div>children component</div>
  )
}

export default React.memo(ChildrenComponent, (prevProps, nextProps):boolean => {
  // 如果传递 nextProps 渲染会返回与传递 prevProps 渲染相同的结果，则返回 true，否则返回 false.
 // return true:不渲染  return false:渲染
  return true
})
