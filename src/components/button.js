import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-red-600 text-white font-[Jura] py-1 px-10 rounded-full  hover:bg-red-400 
    duration-500 '>
      {props.children}
    </button>
  )
}

export default Button