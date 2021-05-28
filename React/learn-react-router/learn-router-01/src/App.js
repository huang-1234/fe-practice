
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link,Redirect} from 'react-router-dom'
import './App.css';


import Index from './pages/Index'

const Home = () => {
  return (
    <h2>Home of hsq</h2>
  )
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Link to="/">首页</Link>  <br />
        <Link to="/home">主页</Link>

        {/* // 注册 */}
        <Route path="/"exact component={Index}></Route>
        <Route path="/home" component={Home}></Route>
        <Redirect to="/Home/"></Redirect>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
