import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
/* 这样的问题是TS语法类型检测的时候会报错，这时候可以给state个props生命类型
propType和
StateType 
就是声明类型的地方，如此问题解决，网上还有一种方案是把
React.Component改成
 React.Component<any, any>
但是这样一来对state和props的类型检测就失去意义了，所以不太建议使用
但是其实还能这么写，看一下TS的解释会发现
React.Component<any, any>
 这里面的第一个any可以是props的类型，第二个any可以是state的类型，即：
class Test1 extends React.Component<propType,StateType>
问题一样可以解决 */


interface propsType{
  count:number
}
type StateType = {
  count: number;
};

class Count extends Component<propsType,StateType> {
  //构造器
  constructor(props: propsType) {
    super(props);
    console.log("Count---constructor");
    //初始化状态
    this.state = {
      count: 0,
    };
  }

  //加1按钮的回调
  add = () => {
    //获取原状态
    const { count } = this.state;
    //更新状态
    this.setState({ count: count + 1 });
  };

  //卸载组件按钮的回调
  death = () => {
    // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  //强制更新按钮的回调
  force = () => {
    this.forceUpdate();
  };
  //组件将要挂载的钩子
  componentWillMount() {
    console.log("Count---componentWillMount");
  }

  //组件挂载完毕的钩子
  componentDidMount() {
    console.log("Count---componentDidMount");
  }

  //组件将要卸载的钩子
  componentWillUnmount() {
    console.log("Count---componentWillUnmount");
  }

  //控制组件更新的“阀门” 必须返回一个布尔值
  shouldComponentUpdate() {
    console.log("Count---shouldComponentUpdate");
    return true;
  }

  //组件将要更新的钩子
  componentWillUpdate() {
    console.log("Count---componentWillUpdate");
  }

  //组件更新完毕的钩子
  componentDidUpdate() {
    console.log("Count---componentDidUpdate");
  }

  render() {
    console.log("Count---render");
    const { count } = this.state;
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>
          不更改任何状态中的数据，强制更新一下
        </button>
      </div>
    );
  }
}

//父组件A
type aStateType = {
  carName: string;
};
class A extends React.Component<any,aStateType> {
  //初始化状态
  state = { carName: "奔驰" };
  changeCar = () => {
    this.setState({ carName: "奥拓" });
  };

  render() {
    return (
      <div>
        <div>我是A组件</div>
        <button onClick={this.changeCar}>换车</button>
        <B carName={this.state.carName} />
      </div>
    );
  }
}

type bPropsType = {
  carName:string
}
type bStateType = {
  carName:string
}
//子组件B
class B extends React.Component<bPropsType,bStateType> {
  //组件将要接收新的props的钩子
  componentWillReceiveProps(props: any) {
    console.log("B---componentWillReceiveProps", props);
  }

  //控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log("B---shouldComponentUpdate");
    return true;
  }
  //组件将要更新的钩子
  componentWillUpdate() {
    console.log("B---componentWillUpdate");
  }

  //组件更新完毕的钩子
  componentDidUpdate() {
    console.log("B---componentDidUpdate");
  }

  render() {
    console.log("B---render");
    return <div>我是B组件，接收到的车是:{this.props.carName}</div>;
  }
}

export default Count;
