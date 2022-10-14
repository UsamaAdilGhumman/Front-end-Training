import React from 'react'

const Input = (props) => {
  return (
    <>
    <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} autoComplete="off"  required={props.required} />
    </>
  )
}

export default Input;