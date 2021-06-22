
import React, { useState,useMemo, ReactElement } from 'react'

export default function notUseMemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const userInfo = useMemo(() => {
    return{
      age: count,
      name: 'Jace',
    }
  }, [count])

  return (
    <div style={{ width: '50vw', height: '50vh', backgroundColor: 'pink' }}>
      <div>
        <Demo userInfo={userInfo} />
      </div>
      <div>
        {value}
        <button onClick={() => {
            setValue(value + 1);
        }}
        >点我加一</button>
      </div>
    </div>
  );
}

interface demoPropUserInfo{
  userInfo:{
    age: number,
    name: string,
  }
}
const Demo = React.memo(function Demo(props:demoPropUserInfo) {
  console.log('调用Demo');
  const {age} = props.userInfo
  return (
    <div style={{ width: '30vw', height: '30vh', backgroundColor: 'green' }}>
      <h2>Demo</h2>
      <span>{age}</span>
    </div>
  )
})