import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

interface propsType {}
interface stateType {
  count: number
}
export default class ReactLife extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props)
    console.log('ReactLife/constructor');
    this.state = {
      count: 0
    }
  }
  /**
   * 1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
      1.	constructor()
      2.	componentWillMount()
      3.	render()
      4.	componentDidMount() =====> 常用
              一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
    2. 更新阶段: 由组件内部this.setSate()或父组件render触发
      1.	shouldComponentUpdate()
      2.	componentWillUpdate()
      3.	render() =====> 必须使用的一个
      4.	componentDidUpdate()
    3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
      1.	componentWillUnmount()  =====> 常用
        一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
   */
  // 只在组件将要挂载的时候调用一次
  componentWillMount() {
    console.log('ReactLife/componentWillMount');
  }
  UNSAFE_componentWillMount() {
    console.log('ReactLife/UNSAFE_componentWillMount');
  }


  // componentWillReceiveNewProps,第一次接收props不算，不掉用该函数，再次接收到props才调用该回调函数hook
  componentWillReceiveProps() {
    console.log('ReactLife/componentWillReceiveProps');
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('ReactLife/UNSAFE_componentWillReceiveProps');
  }

  /**
   * props:any, state:any
   * react-dom.development.js?61bb:67 Warning: `ReactLife` uses `getDerivedStateFromProps` 
   * but its initial state is undefined. This is not recommended. Instead, define the initial state
   *  by assigning an object to `this.state` in the constructor of `ReactLife`. This ensures that 
   * `getDerivedStateFromProps` arguments have a consistent shape.
   */
  // static getDerivedStateFromProps(props: any, state: any) {
  //   console.log('ReactLife/getDerivedStateFromProps');
  // }

  shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    console.log('ReactLife/shouldComponentUpdate');
    if (nextState.count == this.state.count) {
      return false
    }
    return true
  }
  componentWillUpdate() {
    console.log('ReactLife/componentWillUpdate');
  }
      // 在componentDidUpdate之前调用一下以获得之前的数据的快照
  // getSnapshotBeforeUpdate(sanpshotValue: any) {
  //   sanpshotValue='我是ReactLife更新之前的huangsq'
  //   console.log('ReactLife/getSnapshotBeforeUpdate');
  //   return sanpshotValue
  // }
  // 只在组件挂载完毕的时候调用一次,页面一上来就需要做点事情
  componentDidMount() {
    console.log('ReactLife/componentDidMount');
  }
  /**
   * Move data fetching code or side effects to componentDidUpdate.
   *  Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. 
   * In React 18.x, only the UNSAFE_ name will *  work. To rename all deprecated lifecycles to their new names,
   *  you can run `npx react-codemod rename-unsafe-lifecycles` in your project source older
   * @param prevProps 
   * @param prevState 
   * @param snapshot 
   * 更新完毕
   */
  // sanpshotValue来自getSnapshotBeforeUpdate的返回值、相当于在componentDidUpdate之前调用一下以获得之前的数据的快照
  componentDidUpdate(prevProps: any, prevState: any, snapshotValue: any) {
    console.log('ReactLife/componentDidUpdate<<',snapshotValue);
  }

  componentWillUnmount() {
    console.log('ReactLife/componentWillUnmount');
  }

  changeCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }
  unchangeCount = () => {
    const { count } = this.state;
    this.setState({ count: count });
  }
  unmountCount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLBRElement)
  }
  makeForceUpdate = () => {
    this.forceUpdate()
  }

  render() {
    console.log('ReactLife/render================================');
    return (
      <div style={{ width: '50vw', height: '50vh', backgroundColor: 'pink' }}>
        <h2>ParentReactLife</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.changeCount}>加一</button>
        <button onClick={this.unchangeCount}>数字不变</button>
        <button onClick={this.unmountCount}>卸载组件</button>
        <button onClick={this.makeForceUpdate}>强制更新组件</button>
        <br />
        <ChildA countA={this.state.count} />
      </div>
    )
  }
}
//==============================================================================
interface parentPropsType {
  countA: number
}
interface parentStateType {
  countA: number
}
export class ChildA extends React.PureComponent<parentPropsType, parentStateType>{

  constructor(props: parentPropsType | Readonly<parentPropsType>) {
    super(props)
    console.log('ChildA/constructor');
    this.state = {
      countA: props.countA
    }
  }

  componentWillMount() {
    console.log('ChildA/componentWillMount');
  }
  UNSAFE_componentWillMount() {
    console.log('ChildA/UNSAFE_componentWillMount');
  }

  // componentWillReceiveNewProps,第一次接收props不算，不掉用该函数，再次接收到props才调用该回调函数hook
  componentWillReceiveProps() {
    console.log('ChildA/componentWillReceiveProps');
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('ChildA/UNSAFE_componentWillReceiveProps');
  }

  /**
   * props:any, state:any
   * react-dom.development.js?61bb:67 Warning: `ReactLife` uses `getDerivedStateFromProps` 
   * but its initial state is undefined. This is not recommended. Instead, define the initial state
   *  by assigning an object to `this.state` in the constructor of `ReactLife`. This ensures that 
   * `getDerivedStateFromProps` arguments have a consistent shape.
   */
  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps');
  // }

  shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    console.log('ChildA/shouldComponentUpdate');
    if (nextProps.countA === this.state.countA) {
      console.log('shouldComponentUpdate return false');
      return false
    }
    return true
  }

  // const { state, props } = this
  
  componentWillUpdate() {
    console.log('ChildA/componentWillUpdate');
    // this.setState({state.countA: props.countA})
    // this.setState({this.state.countA:this.props.countA})
  }
      // 在componentDidUpdate之前调用一下以获得之前的数据的快照
  // getSnapshotBeforeUpdate(sanpshotValue: any) {
  //   sanpshotValue='我是ChildA更新之前的huangsq'
  //   console.log('ChildA/getSnapshotBeforeUpdate');
  //   return sanpshotValue
  // }

  // 只在组件挂载完毕的时候调用一次,页面一上来就需要做点事情
  componentDidMount() {
    console.log('ChildA/componentDidMount');
  }
  /**
   * Move data fetching code or side effects to componentDidUpdate.
   *  Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. 
   * In React 18.x, only the UNSAFE_ name will *  work. To rename all deprecated lifecycles to their new names,
   *  you can run `npx react-codemod rename-unsafe-lifecycles` in your project source older
   * @param prevProps 
   * @param prevState 
   * @param snapshot 
   * 更新完毕
   */
  // sanpshotValue来自getSnapshotBeforeUpdate的返回值、相当于在componentDidUpdate之前调用一下以获得之前的数据的快照
  componentDidUpdate(prevProps: any, prevState: any, sanpshotValue: any) {
    console.log('ChildA/componentDidUpdate<<',sanpshotValue);
  }

  componentWillUnmount() {
    console.log('ChildA/componentWillUnmount');
  }

  changecountA = () => {
    const { countA } = this.state;
    this.setState({ countA: countA + 1 });
  }
  unchangecountA = () => {
    const { countA } = this.state;
    this.setState({ countA: countA });
  }
  unmountcountA = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLBRElement)
  }

  makeForceUpdate = () => {
    this.forceUpdate()
  }

  render() {
    console.log('ChildA/render=============================================');
    return (
      <div style={{ width: '30vw', height: '30vh', backgroundColor: 'blue' }}>
        <h2>ChildA</h2>
        <h3>state.count:{this.state.countA}</h3>
        <h3>props.count{this.props.countA}</h3>
        <button onClick={this.changecountA}>加一</button>
        <button onClick={this.unchangecountA}>数字不变</button>
        <button onClick={this.unmountcountA}>卸载组件</button>
        <button onClick={this.makeForceUpdate}>强制更新组件</button>
      </div>
    )
  }
}