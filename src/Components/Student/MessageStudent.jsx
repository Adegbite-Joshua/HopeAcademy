import React from 'react'

const MessageStudent = () => {
  return (
    <>
        <div className='w-full md:w-6/12 block mx-auto'>
            <textarea name="" id="" className='w-full focus:outline-0 focus:ring-2 focus::ring-blue-600'rows={5}   placeholder='Your Message here'>
            </textarea>
            <button className='w-full my-2 p-2 rounded-md text-center bg-blue-600 hover:bg-blue-500'>Send To Joshua</button>
        </div>
    </>
  )
}

export default MessageStudent