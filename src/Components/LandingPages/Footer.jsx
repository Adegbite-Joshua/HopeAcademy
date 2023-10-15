import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageFooter = () => {
  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h3 className='text-2xl font-semibold mb-2'>Contact Us</h3>
          <p className='text-sm mb-2'><Link to='/' className='text-blue-500 hover:underline'>89 Marsh Hill Road</Link></p>
          <p className='text-sm mb-2'><Link to='/' className='text-blue-500 hover:underline'>Orange, CT 06477</Link></p>
          <p className='text-sm mb-2'><small>Phone: +2347015886456</small></p>
          <p className='text-sm mb-2'><small>adegbitejoshua07@gmail.com</small></p>
        </div>
      </div>
      <div className='bg-light py-2 px-5 flex flex-col md:flex-row items-center justify-between'>
        <p className='text-sm md:ms-5'><small>PROADE SCHOOL | Copyright © 2023</small></p>
        <p className='text-sm md:me-5'><small>Website by PROADE</small></p>
      </div>
    </>
  );
};

export default LandingPageFooter;
