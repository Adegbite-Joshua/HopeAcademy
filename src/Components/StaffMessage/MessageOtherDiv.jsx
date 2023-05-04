import React from 'react'
import OtherPeople from './OtherPeople'

const MessageOtherDiv = () => {
  return (
    <>
        <div className=" MessageOtherDiv basis-full md:basis-4/12 md:h-screen block bg-slate-300 overflow-y-auto mt-16 md:mt-0 ">
            <div className=' flex w-full justify-center items-center space-x-2 mt-2'>
                <button className=' bg-blue-600 hover:bg-blue-500 rounded-md p-2'>Students</button>
                <button className=' bg-blue-600 hover:bg-blue-500 rounded-md p-2'>Staff</button>
                <button className=' bg-blue-600 hover:bg-blue-500 rounded-md p-2'>Admin</button>
            </div>
            <OtherPeople/>
        </div>
    </>
  )
}

export default MessageOtherDiv