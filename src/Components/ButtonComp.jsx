import React from 'react'

const ButtonComp = ({name}) => {
  return (
    <>
        <button className=' p-2 bg-blue-600 hover:bg-blue-500 rounded-md w-3/6 m-2 block mx-auto'>{name}</button>
    </>
  )
}

export default ButtonComp