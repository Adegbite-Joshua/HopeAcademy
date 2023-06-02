import React from 'react'
import MessageStudent from './MessageStudent'
import StudentLastPerformance from './StudentLastPerformance'
import StudentScoreTable from './StudentScoreTable'
import { useSelector } from 'react-redux'


const StudentMainDIv = ({category, mainindex, individualEmail }) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)

  return (
    <>
        <div className='StudentMainDIv middleDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto border border-2'>
            <h3 className=' text-center'>Adegbite Joshua</h3>
            <div className="w-full overflow-x-scroll">
                <StudentScoreTable/>
            </div>
            <StudentLastPerformance/>
            <MessageStudent category={category} mainindex={mainindex} individualEmail={individualEmail}/>
            
        </div>
    </>
  )
}

export default StudentMainDIv