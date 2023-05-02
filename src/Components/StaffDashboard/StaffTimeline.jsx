import React from 'react'
import Timeline from './Timeline'

const StaffTimeline = () => {
  return (
    <>
        <div className=' w-100 px-3'>
            <h3 className=' font-bold sticky top-0'>Timeline</h3>
            <Timeline/>
            <Timeline/>
            <Timeline/>
            <Timeline/>
        </div>
    </>
  )
}

export default StaffTimeline