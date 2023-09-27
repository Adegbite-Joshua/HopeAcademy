import React from 'react'
import CalendarComp from './Calendar'
import UpcomingEvents from './UpcomingEvents'

const EventAndCalendar = () => {
  return (
    <div className='flex gap-2 my-5 p-5'>
        <UpcomingEvents/>
        <CalendarComp/>
    </div>
  )
}

export default EventAndCalendar