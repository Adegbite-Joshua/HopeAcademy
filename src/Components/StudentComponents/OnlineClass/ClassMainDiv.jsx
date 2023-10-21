import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'



const ClassMainDiv = ({}) => {
    let studentInfo = useSelector((state) => state.studentInformation.studentInformation);
    let allStaffs = useSelector((state) => state.studentInformation.allStaffs);
    let allStudents = useSelector((state) => state.studentInformation.allStudents);
    let fetching = useSelector((state) => state.studentInformation.staffFetchingState);
    const [messageInput, setmessageInput] = useState('')
    
    return (
        <>
            <div className='InboxMainDiv h-full border-r-2 overflow-y-auto md:border-blue-500 p-5 relative topSpace'>
            <h3 className='sticky top-0 text-center'>
                    Online Class
                    <span id='toggleIco' onClick={()=>console.log('func')} className=' md:hidden float-right border-2 p-2 rounded'>
                        <i className='fa fa-bars'></i>
                    </span>
                </h3>
                {/* <div className='h-96 bg-blue-300 flex justify-center items-center'>
                    <h2 className='text-3xl animate-bounce duration-500'>Select A Subject</h2>
                </div> */}
                {/* <div className='h-96 bg-blue-300 flex justify-center items-center'>
                    <h2 className='text-3xl underline underline-offset-4 animate-bounce duration-500'>No Ongoing Class For This Subject</h2>
                </div> */}
                <div className='h-96 bg-blue-500 flex justify-center items-center relative'>
                    <span className='absolute top-2 right-2 bg-white text-blue-500 p-2 rounded-md'>Joined members: 90</span>
                    <video src="/vid.mp4" className='w-full h-full'></video>
                </div>
            </div>
        </>

    )
}

export default ClassMainDiv