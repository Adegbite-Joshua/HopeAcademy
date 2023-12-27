import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageFooter = () => {
  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h3 className='text-2xl font-semibold mb-2'>Contact Us</h3>
          <p className='text-sm mb-2'>89 Marsh Hill Road</p>
          <p className='text-sm mb-2'>Orange, CT 06477</p>
          <p className='text-sm mb-2'><small>Phone: +2347015886456</small></p>
          <p className='text-sm mb-2'><small>adegbitejoshua07@gmail.com</small></p>
        </div>
      </div>
      <div className='bg-light py-2 px-5 flex flex-col md:flex-row items-center justify-between'>
        <p className='text-sm md:ms-5'><small>HOPE Academy | Copyright © 2024</small></p>
        <a href='https://github.com/Adegbite-Joshua' target='blank' className='block text-sm md:me-5'><small>Website by PROADE</small></a>
      </div>
    </>
  );
};

export default LandingPageFooter;
