
import React,{useState,useEffect} from 'react';

const TestUseEffect = () => {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(180);

  const addAge = () => {
    console.log('addAge');
    setAge((age) => age+1)
  }

  useEffect(() => {
    console.log('age/useEffect/Will/Did')
    return () => {
      console.log('age/useEffect/unmount')
    };
  }, [age]);
  useEffect(() => {
    console.log('height/useEffect/Will/Did')
    return () => {
      console.log('height/useEffect/unmount')
    };
  }, [height]);
  return (
    <div>
      <span>{age}</span>
      <button onClick={addAge}>点我长大</button>
      <br />
      <span>{height}</span>
      <button onClick={() => setHeight((height) => height+1)}>点我变高</button>
      <br />
      {/* <RunEffectsOnlyOnce /> */}
      <MouseContainer />
    </div>
  );
}

export default TestUseEffect;


function RunEffectsOnlyOnce() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePos = (e: MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('添加mousemove事件');
    document.addEventListener('mousemove', logMousePos)
    return () => {
      console.log('移除mousemove事件');
      document.removeEventListener('mousemove',logMousePos)
    }
  }, [])

  return (
    <div>
      Y : {y}, X : {x}
    </div>
  )
}

import Counter from './Counter';
import IntervalCouterHooks from './IntervalCounterHooks'
import FetchData from './FetchData'
function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <RunEffectsOnlyOnce />}
      <Counter />
      <span>
      <IntervalCouterHooks />
      </span>
      <FetchData />
    </div>
  )
}
