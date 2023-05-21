import React , {useState, useEffect}from 'react'
import ReceiverMessages from './ReceiverMessages'
import SenderMessages from './SenderMessages'
import { useSelector } from 'react-redux' 
// import StaffMessages from './StaffMessages'

const MessageMainDiv = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let allStudentsInfo = useSelector((state)=>state.staffInformation.allStudents)
  const setViewingMessage = (viewingMessage)=>{

  }
  const [category, setcategory] = useState('');
  const [mainindex, setmainindex] = useState('');
  const [index, setindex] = useState('');
  return (
    <>
        <div className='MessageMainDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto'>
            <h3 className=' text-center font-bold'>Adegbite Joshua</h3>
            <div className='w-full bg-white overflow-y-auto p-2'>
                {/* <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/>
                <SenderMessages/>
                <ReceiverMessages/>
                <SenderMessages/> */}
                {/* {category==0?allStudents[mainindex][index]} */}
                <div className=' w-full h-80 m-auto flex justify-center items-center'>
                  <h2 className=' p-2 bg-blue-500 rounded-md'>Select A Name To Chat With </h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default MessageMainDiv