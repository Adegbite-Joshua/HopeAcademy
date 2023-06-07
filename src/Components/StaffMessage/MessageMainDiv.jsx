import React , {useState, useEffect}from 'react'
import ReceiverMessages from './ReceiverMessages'
import SenderMessages from './SenderMessages'
import { useSelector } from 'react-redux' 
import axios from 'axios'
// import StaffMessages from './StaffMessages'

const MessageMainDiv = ({mainindex, category, email}) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let allStudentsInfo = useSelector((state)=>state.staffInformation.allStudents)
  // const [category, setcategory] = useState('');
  // const [mainindex, setmainindex] = useState('');
  // const [index, setindex] = useState('');
  const sendMessage = async()=>{
    let sendMessageEndpoint = 'http://localhost:7777/staff/message'
    let messageBody = {
      messageSenderClass: staffInfo.class,
      messageSenderEmail: staffInfo.email,
      receiverRelationship: mainindex==1?'staff':'student',
      receiverClass: category,
      receiverEmail: email,
      senderRelationship: 'staff',
      messageBody: document.getElementById('message').value
    }
    console.log(messageBody);
    try {
      const response = await axios.post(sendMessageEndpoint, messageBody)
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        <div className='MessageMainDiv mt-16 md:mt-0 h-5/6 md:h-full basis-full md:basis-8/12 px-5 overflow-y-auto border-2 border-green-500'>
            <div className='w-full h-full bg-white overflow-y-auto p-2'>
                <div className=' h-5/6 overflow-y-auto border border-3 border-blue-400'>
                  {mainindex!='' && category!='' && email!=''?<>
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
                  <SenderMessages/>
                  <SenderMessages/>
                  <ReceiverMessages/>
                  <SenderMessages/>
                  </>:<>
                    <div className=' w-full h-80 m-auto flex justify-center items-center'>
                      <h2 className=' p-2 bg-blue-500 rounded-md'>Select A Name To Chat With </h2>
                    </div>
                  </>} 
                </div>
                <div className=' h-1/6 w-full'>
                  <h3 className=' text-center font-bold'>{email}</h3>
                  <d className="flex">
                    <textarea name="" id="message" className=' w-full border border-3 border-red-400' rows="2"></textarea>
                    <button onClick={sendMessage} className=' p-2 rounded-md bg-blue-500 hover:bg-blue-400 block mx-auto'>Send Message</button>
                  </d>
                </div>
            </div>
        </div>
    </>
  )
}

export default MessageMainDiv