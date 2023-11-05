import React from 'react';
import holidays from '../../../constants/holidays';
import Calendar from './Calendar';

const UpcomingCalendar = () => {
  return (
    <div className='UpcomingCalenda w-full h-auto grid grid-cols-1 md:grid-cols-2 items-center py-8'>
      <div className=' h-72' name='img' style={{ backgroundImage: "url('/teachers/bg-image-5.jpeg')", backgroundSize: '100% 100%', backgroundPosition: '100% 100%' }}>
        {/* <img src="" className='h-100 w-100' alt="" /> */}
      </div>
      <div className='w-full bg-light p-4 mb-8'>
        <h1 className='text-3xl text-center'>Year Calendar Dates</h1>
        <ul className='w-full bg-light p-4'>
            {holidays.map((holiday)=>(
              <Calendar name={holiday.name} date={holiday.date} description={holiday.description} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingCalendar;
