import React from 'react'

const CourseForm = () => {
  return (
    <div className='p-5 bg-slate-300'>
        <h5 className='text-2xl my-5'>New Course</h5>
        <form action="" className='w-full p-2 bg-slate-50'>
            <div className='grid grid-cols-1 md:flex my-2 text-blue-300 w-full gap-3 items-center'>
                <label htmlFor="courseName" className=' md:basis-1/6 text-xl'>Course Name</label>
                <input id='courseName' type="text" className='h-12 border-2 border-blue-300 basis-5/6' />
            </div>
            <div className='grid grid-cols-1 md:flex my-2 text-blue-300 w-full gap-3 '>
                <label htmlFor="description" className=' md:basis-1/6 text-xl'>Description</label>
                <textarea id='description' type="text" className=' border-2 border-blue-300 basis-5/6 h-24' />
            </div>
            <div className='grid grid-cols-1 md:flex my-2 text-blue-300 w-full gap-3 '>
                <label htmlFor="image" className=' md:basis-1/6 text-xl'>Subject Image</label>
                <input id='description' type="file" accept='.jpg, .jpeg, .png' className=' border-2 border-blue-300 basis-5/6 h-12' />
            </div>
            <div className='grid grid-cols-1 md:flex my-2 text-blue-300 w-full gap-3 '>
                <label htmlFor="class" className=' md:basis-1/6 text-xl'>Assigned Class</label>
                <select name="" id="" className=' text-black focus:border-blue-600 border-2 border-blue-300 basis-5/6 h-12'>
                    <option value="">JSS 1</option>
                    <option value="">JSS 2</option>
                    <option value="">JSS 3</option>
                    <option value="">SSS 1</option>
                    <option value="">SSS 2</option>
                    <option value="">SSS 3</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:flex my-2 text-blue-300 w-full gap-3 '>
                <label htmlFor="teacher" className=' md:basis-1/6 text-xl'>Assigned Class</label>
                <select name="" id="teacher" className=' text-black focus:border-blue-600 border-2 border-blue-300 basis-5/6 h-12'>
                    <option value="">Ade</option>
                    <option value="">Ade</option>
                    <option value="">Kola</option>
                    <option value="">Kola</option>
                    <option value="">Kola</option>
                    <option value="">Seyi</option>
                </select>
            </div>
            <div className='flex'>
                <button className='bg-blue-500 ms-auto px-4 py-2 rounded-lg'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default CourseForm