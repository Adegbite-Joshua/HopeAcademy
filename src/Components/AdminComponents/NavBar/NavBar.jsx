import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white h-28 border-2 border-red-600">
      <div className="flex justify-between items-center h-full p-5">
        <img src="/vite.svg" className='w-32 h-full' alt="" />
        <div className="flex space-x-10 h-full">
          <a href="/" className='my-auto'>Dashboard</a>
          <div className="relative group my-auto">
            <span>Account</span>
            <div className="w-52 absolute hidden group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <a href="#" className='block border-b-2 mb-3'>New Account</a>
              <a href="#" className='block border-b-2 mb-3'>Staff Accounts</a>
              <a href="#" className='block border-b-2 mb-3'>Students Account</a>
            </div>
          </div>
          <div className="relative group my-auto">
            <span>Classes</span>
            <div className="w-52 absolute hidden group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <a href="#" className='block border-b-2 mb-3'>JSS 1</a>
              <a href="#" className='block border-b-2 mb-3'>JSS 2</a>
              <a href="#" className='block border-b-2 mb-3'>JSS 3</a>
              <a href="#" className='block border-b-2 mb-3'>SSS 1</a>
              <a href="#" className='block border-b-2 mb-3'>SSS 2</a>
              <a href="#" className='block border-b-2 mb-3'>SSS 3</a>
            </div>
          </div>
          <div className="relative group my-auto">
            <span>Courses</span>
            <div className="w-52 absolute hidden group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <a href="#" className='block border-b-2 mb-3'>New Courses</a>
              <a href="#" className='block border-b-2 mb-3'>All Courses</a>
            </div>
          </div>
          <a href="#" className='block my-auto'>Notice and Events</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
