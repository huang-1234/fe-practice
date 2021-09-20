import React from 'react'




import s from "./Checker.m.sass"
import { cached } from './../../../../../../../../../PrincipleCode/vue-2.5.21/src/shared/util';

interface PropsType{
  name: string
  label: string
  value: boolean
  onSubmit: (name: string, isChecked: boolean) => {}
}
/**
 * 布尔型单选框
 */
export function Checker(props: PropsType) {

  const _submitIsChecked = (isChecked: boolean) => {
    props.onSubmit(props.name, isChecked)
  }
  return (
    <div className={s.checkerBox}
    >
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="checkbox"
        id={props.label}
        name={props.label}
        checked={props.value}
        onChange={_submitIsChecked}
      >

      </input>
  </div>
  )
}