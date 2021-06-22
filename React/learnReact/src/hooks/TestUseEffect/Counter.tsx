/**
 * 每秒 +1 的计数器
 */

import React, { Component } from 'react'

class Counter extends Component {

  state = {
    count: new Date().toLocaleString()
  }
  timer: number | undefined

  tick = () => {
    this.setState({
      count: new Date().toLocaleString()
    })
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }


  render() {
    return (
      <div>
        <span>Counter Time: {this.state.count}</span>
      </div>
    )
  }
}

export default Counter

