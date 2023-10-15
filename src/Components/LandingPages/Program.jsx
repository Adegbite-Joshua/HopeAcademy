import React from 'react';

const Program = ({ title, body, img }) => {
  return (
    <div className='flex flex-col items-center px-5 mb-8'>
      <img src={img} className='rounded-full bg-light mb-4' style={{ width: '150px', height: '150px', objectFit: 'cover' }} alt='' />
      <h3 className='text-blue-500 text-2xl font-semibold mb-2'>{title}</h3>
      <p className='text-center mb-4'>{body}</p>
      <button className='bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out'>
        LEARN MORE
      </button>
    </div>
  );
};

export default Program;
