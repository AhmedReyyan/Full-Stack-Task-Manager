import React from 'react'

const Button = (props) => {

     const { text , secClass , onClick , type}   = props
   return (
    <button  onClick={onClick} type={type} className= {"bg-gray-300 p-2 rounded-md cursor-pointer " }>{text}</button>
  )
}

export default Button
