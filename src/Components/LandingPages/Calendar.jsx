import React from 'react';

const Calendar = ({ date, description, name }) => {
  return (
    <li className="list-group-item flex flex-col gap-3 hover:bg-slate-200">
      {/* <div className='w-full h-auto'> */}
        <p className=' bg-red-300 flex justify-content-between align-items-center'>
          <span className="font-weight-bold">{date}</span>
          <span className="text-end ms-auto">{name}</span>
        </p>
        <p>{description}</p>
      {/* </div> */}
    </li>
  );
};

export default Calendar;
