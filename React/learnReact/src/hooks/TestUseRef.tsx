
import { func } from 'prop-types';
import React,{useRef} from 'react';

const initialValue = 0;
const refContainer = useRef(initialValue);

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    if("object"===Object.prototype.toString.call(inputEl.current).slice(8,-1)){
      inputEl.current.focus()
    }

  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default function InputContainer() {
  <TextInputWithFocusButton />
}