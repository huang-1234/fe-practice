// import React from 'react'
import * as React from 'react'


// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux';
// const rootReducer = combineReducers(enthusiasm);
// const store = createStore(rootReducer);

// import ScrollingList from './components/ScrollingList'
// import Count from './components/Count'
// import FuncA from './components/FuncA'
// import ReactLife from './components/ReactLife'
// import TestUseCallback from './hooks/testUseCallback'
// import ComponentA from './hooks/ComponentA'
// import TestUseMemo from './hooks/TestUseMemo'
// import TestUseEffect from './hooks/TestUseEffect/TestUseEffect'

// redux
// import UseReduxHello from './learn-redux/containers/Hello'
// import { enthusiasm } from './learn-redux/reducers';


import TestWebpack from './testWebpack';
import { MyTable } from './components/commom/Table';

export default function App() {
  // const list: number[] = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      {/* <Count />
      <FuncA /> */}
      {/* <FuncA list = {list} /> */}
      {/* <ReactLife /> */}
      {/* <TestUseCallback /> */}
      {/* <ComponentA /> */}
      {/* <TestUseEffect /> */}
      {/* <Provider store={store}>
        < UseReduxHello  />
      </Provider> */}
      {/* <TestWebpack /> */}
      <MyTable />
    </div>
  )
}


