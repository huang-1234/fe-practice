import React, { useState, useEffect } from 'react';

interface demoPropsType {
  value: {
    a: number;
    b: number;
    c: number;
  }
}
function Demo(props: demoPropsType) {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    const { value } = props
    setValue(() => value)
    return () => {

    };
  }, [value]);

  return (
    <>
      <span>{value}</span>
    </>
  )
}

export default function Test() {

  const [state, setState] = useState({ a: 1, b: 1, c: 1 });
  const [value, setValue] = useState(11);

  return (
    <div>
      <div>
        state{state.a},{state.b},{state.c}
      </div>
      <button
        onClick={() => {
          //@ts-ignore
          setState({ a: 2 });
          //@ts-ignore
          setState({ b: 2 });
          console.log(state, 'state');
        }}
      >
        测试1
      </button>
      <hr />
      <div>value{value}</div>

      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        测试2
      </button>
      <Demo value={state} />
    </div>
  );
}