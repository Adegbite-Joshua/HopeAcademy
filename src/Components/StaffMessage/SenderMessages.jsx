import React from 'react'

const SenderMessages = () => {
  return (
    <>
        <div className=' w-64 md:w-96 h-auto rounded-lg rounded-tr-none overflow-visible bg-slate-300 block ms-auto p-2 my-1'>
            <div className=' m-1 p-2 rounded-md'>
              <img src="vite.svg" className='h-12 w-12 float-left' alt="" />
              <p>Hello. How are you today?</p>
              <p className='text-right'><small>10:00 PM</small></p>
            </div>
        </div>
    </>
  )
}

export default SenderMessages