import React from 'react'

const SenderMessages = () => {
  return (
    <>
        <div className=' w-64 md:w-96 h-auto bg-slate-300 block ms-auto   relative'>
            <div className=' m-1 p-2 rounded-md block absolute inset-0 '></div>
            <div className=' m-1 p-2 rounded-md relative'>
              <img src="vite.svg" className='h-12 w-12 float-left' alt="" />
              <p>Hello. How are you today?</p>
              <p className='text-right'><small>10:00 PM</small></p>
            </div>
        </div>
    </>
  )
}

export default SenderMessages