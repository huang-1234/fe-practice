import React, { commponent } from 'react';
import { is } from 'immutable';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    const thisState = this.state || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length
    ) {
      return true;
    }
    for (const keys in nextProps) {
      // !==判断原生对象，is判断immutable对象
      if (thisProps[key] !== nextProps[key] ||
        !is(thisProps[key], nextProps[key]))
        return true;
    }
    for (const key in nextState) {
      if (thisState[key] !== nextState[key] ||
        !is(thisState[key], nextState[key])
      ){
        return true;
      }
    }
  }
}