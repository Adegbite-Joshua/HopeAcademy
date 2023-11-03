import React, { useState } from 'react'

const ClassSideDiv = ({startClassFunction }) => {
    const handleClick = (id) =>{
        let confirmMessage = confirm('Are you sure you want to join this class');
        if (confirmMessage) {
            startClassFunction(id)
        }
    }
    return (
        <>
            <div id='OtherStudents' className=' showNone pt-24 md:p-2'>
                <label htmlFor="selectClass" className='text-center text-light font-bold p-2'>
                    Select subject to join the class if available
                    <span id='toggleIco' onClick={()=>console.log('func')} className='float-right md:hidden border-2 p-2 rounded'>
                        <i className='fa fa-close'></i>
                    </span>
                </label>
                <div className='px-2 md:px-5'>
                    <button onClick={()=>handleClick('0')} className='block my-2 p-2 text-center bg-blue-300 w-full rounded-5' >Mathematics</button>
                    <button onClick={()=>handleClick('1')} className='block my-2 p-2 text-center bg-blue-300 w-full rounded-5' >Mathematics</button>
                    <button onClick={()=>handleClick('2')} className='block my-2 p-2 text-center bg-blue-300 w-full rounded-5' >Mathematics</button>
                    <button onClick={()=>handleClick('3')} className='block my-2 p-2 text-center bg-blue-300 w-full rounded-5' >Mathematics</button>
                    <button onClick={()=>handleClick('4')} className='block my-2 p-2 text-center bg-blue-300 w-full rounded-5' >Mathematics</button>
                </div>
                <div className='w-full OtherStudentsDiv py-3 px-2 h-80vh overflow-y-auto'>
                    {/* {viewing === 'students' ? <Students func={()=>console.log('func2')} /> : ''}
                    {viewing === 'staffs' ? <Staffs func={()=>console.log('func2')} /> : ''} */}
                </div>
            </div>
        </>
    )
}

export default ClassSideDiv