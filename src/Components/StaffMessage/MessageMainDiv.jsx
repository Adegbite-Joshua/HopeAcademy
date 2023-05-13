import React from 'react'
import ReceiverMessages from './ReceiverMessages'
import SenderMessages from './SenderMessages'
// import StaffMessages from './StaffMessages'

const MessageMainDiv = () => {
  return (
    <>
        <div className='MessageMainDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto'>
            <h3 className=' text-center font-bold'>Adegbite Joshua</h3>
            <div className='w-full bg-white overflow-y-auto p-2'>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
            </div>
        </div>
    </>
  )
}

export default MessageMainDiv