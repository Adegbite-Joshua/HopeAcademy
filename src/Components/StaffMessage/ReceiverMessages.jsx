import React from 'react'

const ReceiverMessages = ({message, date, src}) => {
  return (
    <>
        <div className='w-64 md:w-96 h-auto bg-slate-300 block m-1 p-2 rounded-lg rounded-tl-none'>
            <img src={src?src:'"vite.svg"'} className='h-12 w-12 float-left' alt="" />
            <p>{message}</p>
            <p className='text-right'><small>{date}</small></p>
        </div>
    </>
  )
}

export default ReceiverMessages