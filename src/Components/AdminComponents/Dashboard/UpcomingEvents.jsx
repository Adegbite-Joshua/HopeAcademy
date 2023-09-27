import React from 'react'
import Event from './Event'

const UpcomingEvents = () => {
  return (
    <>
        <div className=' basis-2/6 mx-auto'>
            <h3 className='m-3'>Upcoming Event</h3>
            <div className='m-3'>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </div>
        </div>
    </>
    
  )
}

export default UpcomingEvents