import React, { useState } from 'react'
import OtherPeople from './OtherPeople'
import OtherStaff from './OtherStaff'

const MessageOtherDiv = ({func, func2}) => {
  const [messaging, setmessaging] = useState('other')
  return (
    <>
        <div className=" MessageOtherDiv basis-full md:basis-4/12 h-1/6 md:h-screen block bg-slate-300 overflow-y-auto mt-16 md:mt-0 border-2 border-red-400 ">
            <div className=' flex w-full justify-center items-center space-x-2 mt-2'>
                <button onClick={()=>setmessaging('other')} className=' bg-blue-600 hover:bg-blue-500 rounded-md p-2'>Students</button>
                <button onClick={()=>setmessaging('staff')} className=' bg-blue-600 hover:bg-blue-500 rounded-md p-2'>Staff</button>
                <button className=' bg-blue-600 hover:bg-blue-500 rounded-md p-2'>Admin</button>
            </div>
            {messaging=='other'?<OtherPeople func={func} func2={func2}/>: ''}
            {messaging=='staff'?<OtherStaff func={func} func2={func2}/>:''}
        </div>
    </>
  )
}

export default MessageOtherDiv