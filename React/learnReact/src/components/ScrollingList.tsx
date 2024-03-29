import React, { Component } from 'react'
import PropTypes from 'prop-types'

interface PropType{
  list:number[]
}

export default class ScrollingList extends Component {
  listRef: any;

  
  constructor(props: PropType | {}  ) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps: { list: string | any[]; }, prevState: any) {
    // 我们是否在 list 中添加新的 items ？
    // 捕获滚动​​位置以便我们稍后调整滚动位置。

    const list = this.listRef.current;
    console.log(list);
    return list.scrollHeight - list.scrollTop;
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: number | null) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>...contents...</div>
    );
  }
}