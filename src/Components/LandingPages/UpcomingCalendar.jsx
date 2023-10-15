import React from 'react';
import Calendar from './Calendar';

const UpcomingCalendar = () => {
  return (
    <div className='UpcomingCalendar h-auto grid grid-cols-1 md:grid-cols-2 items-center py-8'>
      <div className=' h-72' name='img' style={{ backgroundImage: "url('/one.png')" }}>
        {/* <img src="" className='h-100 w-100' alt="" /> */}
      </div>
      <div className='w-full bg-light p-4 mb-8'>
        <h1 className='text-3xl text-center'>Upcoming Calendar Dates</h1>
        <ul className='w-full bg-light p-4'>
            <Calendar range={(<>August 22-26, <br /> 2022</>)} />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
            <Calendar />
        </ul>
      </div>

    </div>
  );
};

export default UpcomingCalendar;
