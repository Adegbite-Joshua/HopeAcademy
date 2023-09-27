import React from 'react';

const Navbar = () => {

  const showNavBar =()=>{
    document.getElementById('adminNavBar').classList.toggle('responsive')
  }
  const showSubLink =(container)=>{
    document.getElementById(container).classList.toggle('responsive')
  }

  return (
    <nav className="bg-blue-500 p-4 text-white h-28 sticky top-0">
      <div className="flex justify-between items-center h-full p-5 relative">
        <img src="/vite.svg" className='w-32 h-full' alt="" />
        <button onClick={showNavBar} className='p-2 border-2 rounded-lg md:hidden'><i className='fa fa-bars'></i></button>
        <div id='adminNavBar' className="md:flex md:space-x-10 h-screen md:h-full">
          <a href="/" className='my-auto'>Dashboard</a>
          <div className="relative group my-auto">
            <span onClick={()=>showSubLink('accountSubLink')}>Account</span>
            <div id='accountSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <a href="#" className='block border-b-2 mb-3'>New Account</a>
              <a href="#" className='block border-b-2 mb-3'>Staff Accounts</a>
              <a href="#" className='block border-b-2 mb-3'>Students Account</a>
            </div>
          </div>
          <div className="relative group my-auto">
            <span onClick={()=>showSubLink('classesSubLink')}>Classes</span>
            <div id='classesSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <a href="#" className='block border-b-2 mb-3'>JSS 1</a>
              <a href="#" className='block border-b-2 mb-3'>JSS 2</a>
              <a href="#" className='block border-b-2 mb-3'>JSS 3</a>
              <a href="#" className='block border-b-2 mb-3'>SSS 1</a>
              <a href="#" className='block border-b-2 mb-3'>SSS 2</a>
              <a href="#" className='block border-b-2 mb-3'>SSS 3</a>
            </div>
          </div>
          <div className="relative group my-auto">
            <span onClick={()=>showSubLink('coursesSubLink')}>Courses</span>
            <div id='coursesSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
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
