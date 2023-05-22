import React , {useState, useEffect}from 'react'
import ReceiverMessages from './ReceiverMessages'
import SenderMessages from './SenderMessages'
import { useSelector } from 'react-redux' 
// import StaffMessages from './StaffMessages'

const MessageMainDiv = ({mainindexRec, categoryRec, individualIndexRec}) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let allStudentsInfo = useSelector((state)=>state.staffInformation.allStudents)
  const [category, setcategory] = useState('');
  const [mainindex, setmainindex] = useState('');
  const [index, setindex] = useState('');
  const sendMessage = async()=>{
    let sendMessageEndpoint = 'http://localhost:7777/staff/dashboard'
    let messageBody = {
      // messageSender: staffInfo
    }
    try {
      const response = await axios.post(sendMessageEndpoint, messageBody)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        <div className='MessageMainDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto'>
            <div className='w-full h-full bg-white overflow-y-auto p-2'>
                <div className=' h-3/6 overflow-y-auto'>
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
                  <div className=' w-full h-80 m-auto flex justify-center items-center'>
                    <h2 className=' p-2 bg-blue-500 rounded-md'>Select A Name To Chat With </h2>
                  </div>
                </div>
                <div className=' h-3/6 w-full p-2'>
                  <h3 className=' text-center font-bold'>Adegbite Joshua</h3>
                  <textarea name="" id="" className=' w-full border border-3 border-red-400' rows="4"></textarea>
                  <button onClick={sendMessage} className=' p-2 rounded-md bg-blue-500 hover:bg-blue-400 block mx-auto'>Send Message</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MessageMainDiv