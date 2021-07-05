import React,{useReducer} from 'react';

interface stateType{
  count: number;
}
interface actionsType{
  type: "increment" | "decrement"
}
enum Actions {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}
const initialState: stateType = {count: 0};

function reducer(state: stateType, action: actionsType) {
  switch (action.type) {
    case  Actions.INCREMENT:
      return {count: state.count + 1};
    case Actions.DECREMENT:
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default Counter