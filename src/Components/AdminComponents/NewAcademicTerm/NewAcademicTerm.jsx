import React from 'react'
import Navbar from '../NavBar/NavBar'

const NewAcademicTerm = () => {
  return (
    <>
        <Navbar/>
        <div className='p-10'>
            <form action="" className='w-full'>
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="" className='basis-2/6'>Select The Term</label>
                    <select name="" id="" className='basis-4/6 border-2 border-blue-400 p-2 '>
                        <option value="">1<sup><small>st</small></sup> Term</option>
                        <option value="">2<sup><small>nd</small></sup> Term</option>
                        <option value="">3<sup><small>rd</small></sup> Term</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="schoolFeeAmount" className='basis-2/6'>Set School Fee Amount</label>
                    <input type="number" name="" id="" className='basis-4/6 border-2 border-blue-400 p-2 ' placeholder='Amount' />
                </div>                
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="schoolFeeAmount" className='basis-2/6'>Set Staff Salary</label>
                    <input type="number" name="" id="" className='basis-4/6 border-2 border-blue-400 p-2 ' placeholder='Amount' />
                </div>
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="schoolFeeAmount" className='basis-2/6'>Input Your Staff Authorization Code</label>
                    <input type="text" name="" id="" className='basis-4/6 border-2 border-blue-400 p-2 ' placeholder='Authorization Code' />
                </div>
                <div className='my-1'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Are you sure you this term has ended, this will automatically generate your students information </label>
                </div>             
                <div className='flex'><button className='py-2 px-3 bg-blue-500 rounded-lg ms-auto'>Create Academic Term</button></div>
            </form>
        </div>
    </>
  )
}

export default NewAcademicTerm