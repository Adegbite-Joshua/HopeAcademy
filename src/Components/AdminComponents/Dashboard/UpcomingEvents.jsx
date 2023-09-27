import React from 'react'
import Event from './Event'

const UpcomingEvents = () => {
  return (
    <>
        <div className=' order-1 md:order-none basis-full md:basis-2/6'>
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