import React from 'react';
import Program from './Program';

const ProgramsPage = () => {
  return (
    // <div className='SchoolProgramsPage w-full min-h-screen py-3 bg-gray-300'>
      <div className='container text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-3 px-3 items-center justify-center'>
        <Program img='hat.png' title='Academic Programming' body='Hope Academy offers a comprehensive curriculum aligned with Connecticut State Standards.' />
        <Program img='screen.png' title='Therapeutic Approach' body='Our Therapeutic Approach is what makes Hope Academy a truly unique school environment for our students.' />
        <Program img='apple.png' title='School Engagement Services' body='We recognize that school is not easy for many students. For some students, it is simply overwhelming.' />
        <Program img='world.png' title='Transition Services' body='In working with even our youngest students, we have their long-term future in mind.' />
      </div>
    // </div>
  );
};

export default ProgramsPage;
