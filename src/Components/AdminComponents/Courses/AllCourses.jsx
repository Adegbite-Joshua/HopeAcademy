import React from 'react'
import Navbar from '../NavBar/NavBar'

const AllCourses = () => {
  return (
    <>
        <Navbar/>
        <div className=' grid grid-cols-1 md:flex'>
            <div className=' order-3 md:order-none basis-full md:basis-4/6'>
                <table>
                    <thead>
                        <tr>
                            <td>Subject Image</td>
                            <td>Subject Name</td>
                            <td>Subject Teacher</td>
                            <td>Teacher Email</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
            <div className=' order-1 md:order-none basis-full md:basis-2/6'>
                <form action="">
                    <div>
                        <label htmlFor="" className='w-full text-xl'>Select Class</label>
                        <select name="" id="" className=' text-black focus:border-blue-600 border-2 border-blue-300 basis-5/6 h-12'>
                            <option value="">JSS 1</option>
                            <option value="">JSS 2</option>
                            <option value="">JSS 3</option>
                            <option value="">SSS 1</option>
                            <option value="">SSS 2</option>
                            <option value="">SSS 3  </option>
                        </select>
                    </div>
                </form>
            </div>
        </div>

        
    </>
  )
}

export default AllCourses