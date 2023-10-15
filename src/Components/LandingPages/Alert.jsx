import React from 'react';

const Alert = () => {
  const hideAlert = () => {
    document.getElementById('Alert').style.display = 'none';
  };

  return (
    <div
      id='Alert'
      className='alert alert-primary w-75 mx-auto p-4 position-fixed bottom-5 start-50 translate-middle-x rounded shadow'
      role='alert'
    >
      <i className='fas fa-bell me-2'></i>
      HOPE Academy is currently operating full-time, in-person learning.
      <button
        type='button'
        className='btn-close btn-sm'
        aria-label='Close'
        onClick={hideAlert}
      ></button>
    </div>
  );
};

export default Alert;
