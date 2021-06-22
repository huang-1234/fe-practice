// import React from 'react'
import * as React from 'react'
// import ScrollingList from './components/ScrollingList'
// import Count from './components/Count'
// import FuncA from './components/FuncA'
// import ReactLife from './components/ReactLife'
// import TestUseCallback from './hooks/testUseCallback'
// import ComponentA from './hooks/ComponentA'
// import TestUseMemo from './hooks/TestUseMemo'
import TestUseEffect from './hooks/TestUseEffect/TestUseEffect'
export default function App() {
  const list:number[]   = [1,2,3,4,5,6]
  return (
    <div>
      {/* <Count />
      <FuncA /> */}
      {/* <FuncA list = {list} /> */}
      {/* <ReactLife /> */}
      {/* <TestUseCallback /> */}
      {/* <ComponentA /> */}
      <TestUseEffect />
    </div>
  )
}
