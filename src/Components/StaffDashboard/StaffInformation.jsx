import React from 'react'
import { useSelector } from 'react-redux'

const StaffInformation = () => {
  const subjects = [
    'MATHEMATICS',
    'ENGLISH LANGUAGE',
    'YORUBA',
    'CIVIC EDUCATION',
    'COMPUTER STUDIES',
    'GEOGRAPHY',
    'ECONOMICS',
    'PHYSICS',
    'CHEMISTRY',
    'BIOLOGY',
    'ANIMAL HUSBANDRY',
    'FURTHER MATHEMATICS',
    'TECHNICAL DRAWING '
  ]
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  return (
    <>
        <div className="w-full flex items-center space-x-3 relative">
            <img src="vite.svg" alt="" className=" h-20 w-20 rounded-full" />
            <div className=''>
                <h3>{staffInfo.lastName.toUpperCase()} {staffInfo.firstName.toUpperCase()}</h3>
                <h5 className='text-slate-500'>{subjects[staffInfo.staffIndex]} TEACHER</h5>
                <span className=' absolute top-0 right-0 '>{staffInfo.activeStatus?<span className='text-green-500'>Online</span>: <span className=' text-red-600'>Offline</span>}</span>
            </div>
        </div>
    </>
  )
}

export default StaffInformation