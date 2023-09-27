import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/admin/dashboard" className='my-auto'>Dashboard</Link>
          <div className="relative group my-auto">
            <span onClick={()=>showSubLink('accountSubLink')}>Account</span>
            <div id='accountSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <Link to="/admin/account/new" className='block border-b-2 mb-3'>New Account</Link>
              <Link to="/admin/account/edit" className='block border-b-2 mb-3'>Edit Account</Link>
              <Link to="#" className='block border-b-2 mb-3'>Staff Accounts</Link>
              <Link to="#" className='block border-b-2 mb-3'>Students Account</Link>
            </div>
          </div>
          <div className="relative group my-auto">
            <span onClick={()=>showSubLink('classesSubLink')}>Classes</span>
            <div id='classesSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <Link to="#" className='block border-b-2 mb-3'>JSS 1</Link>
              <Link to="#" className='block border-b-2 mb-3'>JSS 2</Link>
              <Link to="#" className='block border-b-2 mb-3'>JSS 3</Link>
              <Link to="#" className='block border-b-2 mb-3'>SSS 1</Link>
              <Link to="#" className='block border-b-2 mb-3'>SSS 2</Link>
              <Link to="#" className='block border-b-2 mb-3'>SSS 3</Link>
            </div>
          </div>
          <div className="relative group my-auto">
            <span onClick={()=>showSubLink('coursesSubLink')}>Courses</span>
            <div id='coursesSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
              <Link to="#" className='block border-b-2 mb-3'>New Courses</Link>
              <Link to="#" className='block border-b-2 mb-3'>All Courses</Link>
            </div>
          </div>
          <Link to="#" className='block my-auto'>Notice and Events</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
