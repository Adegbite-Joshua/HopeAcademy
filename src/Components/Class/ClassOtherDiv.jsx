import React from 'react'
import OnGoingClass from './OnGoingClass'
import ScheduledClass from './ScheduledClass'

const ClassOtherDiv = () => {
  return (
    <>
        <div className="otherDiv basis-full md:basis-4/12 md:h-screen block bg-white overflow-y-auto mt-16 md:mt-0">
            <p className='text-center'>Schedule New Class</p>
            {/* <OnGoingClass /> */}
            <ScheduledClass />
        </div>
    </>
  )
}

export default ClassOtherDiv