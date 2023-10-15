import React from 'react';

const Calendar = ({ range }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="font-weight-bold">22 Aug 2022</span>
      <span>Professional Development - Staff Only</span>
      <span className="text-end ms-auto">{range}</span>
    </li>
  );
};

export default Calendar;
