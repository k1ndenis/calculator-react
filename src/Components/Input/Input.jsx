import React from "react";

const Input = (props) => {
  const { value } = props

  return (
    <>
     <input
      value={value}
     />
     <br/>
     <br/>
    </>
  )
}

export default Input;
