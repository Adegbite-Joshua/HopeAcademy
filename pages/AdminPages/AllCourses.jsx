import React from 'react'
import Navbar from '../../src/Components/AdminComponents/NavBar/NavBar'
import Course from '../../src/Components/AdminComponents/Courses/Course'

const AllCourses = () => {
  return (
    <>
        <Navbar/>
        <div className=' grid grid-cols-1 md:flex pt-10 px-2'>
            <div className=' order-3 md:order-none basis-full md:basis-4/6 overflow-x-auto'>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr>
                            <td className='border-2 py-1 px-2'>Subject Image</td>
                            <td className='border-2 py-1 px-2'>Subject Name</td>
                            <td className='border-2 py-1 px-2'>Subject Teacher</td>
                            <td className='border-2 py-1 px-2'>Teacher Email</td>
                            <td className='border-2 py-1 px-2'>Actions</td>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <Course subjectImgae='/vite.svg' subjectName='Mathematics' teacherName='Ade kola' email='ade@gmail.com'/>
                        <Course subjectImgae='/vite.svg' subjectName='Mathematics' teacherName='Ade kola' email='ade@gmail.com'/>
                        <Course subjectImgae='/vite.svg' subjectName='Mathematics' teacherName='Ade kola' email='ade@gmail.com'/>
                        <Course subjectImgae='/vite.svg' subjectName='Mathematics' teacherName='Ade kola' email='ade@gmail.com'/>
                        <Course subjectImgae='/vite.svg' subjectName='Mathematics' teacherName='Ade kola' email='ade@gmail.com'/>
                    </tbody>
                </table>
            </div>
            <div className=' order-1 md:order-none basis-full md:basis-2/6 p-5'>
                <form action="w-full">
                    <div>
                        <label htmlFor="" className='w-full block text-xl'>Select Class</label>
                        <select name="" id="" className='block w-full text-black focus:border-blue-600 border-2 border-blue-300 h-12'>
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