import React from 'react'
import OnGoingClass from './OnGoingClass'
import ScheduledClass from './ScheduledClass'

const ClassOtherDiv = () => {
  return (
    <>
        <div className="otherDiv basis-full md:basis-4/12 md:h-screen block bg-white overflow-y-auto mt-16 md:mt-0">
            <button className='block mx-auto bg-red-500 p-2 rounded-md my-1 text-center'>Close Class</button>
            <button className='block mx-auto bg-blue-500 p-2 rounded-md my-1 text-center'>Schedule New Class</button>
            {/* <OnGoingClass /> */}
            <ScheduledClass />
        </div>
    </>
  )
}

export default ClassOtherDiv