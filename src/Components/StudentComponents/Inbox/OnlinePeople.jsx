import React from 'react'

const OnlinePeople = ({name, func, id}) => {
  return (
    <>
        <div onClick={()=>func(name, id)} className='w-full p-2 my-2'>
            <img src="/school_logo.png" className='float-left opacity-50' alt="" />
            <h5 className='d-inline'>{name} <i className='fab fa-creative-commons-by ms-3 text-green-500'></i></h5>
        </div>
    </>
  )
}

export default OnlinePeople