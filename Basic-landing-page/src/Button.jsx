import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className="bg-[tomato] px-4 py-2 rounded-lg cursor-pointer">{props.title}</button>
    </>
  )
}

export default Button