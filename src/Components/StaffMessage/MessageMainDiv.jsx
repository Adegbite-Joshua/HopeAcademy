import React , {useState, useEffect}from 'react'
import ReceiverMessages from './ReceiverMessages'
import SenderMessages from './SenderMessages'
import { useSelector } from 'react-redux' 
import axios from 'axios'

const MessageMainDiv = ({partnerName, messages, partnerCommonId, sendMessage}) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let allStudents = useSelector((state)=>state.staffInformation.allStudents)
  let allStaffs = useSelector((state)=>state.staffInformation.allStaffs)
  let staffMessages = useSelector((state)=>state.staffInformation.staffInformation)?.messages
  const [receiverName, setreceiverName] = useState('Select A Name')
  useEffect(() => {
    document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
  }, [partnerCommonId, staffMessages])
  
  return (
    <>
        <div className='MessageMainDiv md:mt-0 h-5/6 md:h-full basis-full md:basis-8/12 px-5 overflow-y-auto border-2 border-green-500'>
            <div className='w-full h-full bg-white overflow-y-auto p-2'>
                <div id='messageContainer' className=' h-5/6 overflow-y-auto border border-3 border-blue-400'>
                {messages?.length>=1?messages.map((message, index)=>(
                    message.senderId==studentInfo._id?<SenderMessages messageBody={message} message={message.message} time={`Date: ${message.messageDate} Time: ${message.messageTime}`}/>:<ReceiverMessages messageBody={message} message={message.message} time={`Date: ${message.messageDate} Time: ${message.messageTime}`}/>
                )):<>
                    <div className='flex h-full w-full justify-center items-center'>
                        <p>You currently have no message with this user</p>
                    </div>
                </>}        
                  {/* {staffMessages?.length>0?<>
                  {staffMessages.map((message)=>(
                    <ReceiverMessages message={message.messageBody} date={`Date: ${message.messageDate} Time: ${message.messageTime}`} src='vite.svg'/>
                  ))}
                  </>:<><SenderMessages message={`Hello ${staffInfo.firstName} ${staffInfo.lastName},  you do not have any message yet`} date={new Date().toLocaleTimeString()} src='vite.svg'/></>}  */}
                </div>
                <div className=' h-1/6 w-full'>
                  <h3 className=' text-center font-bold'>{partnerName}</h3>
                  <d className="flex">
                    <textarea name="" id="message" className=' w-full border border-3 border-red-400' rows="2"></textarea>
                    <button onClick={()=>sendMessage(message.value)} className=' p-2 rounded-md bg-blue-500 hover:bg-blue-400 block mx-auto'>Send Message</button>
                  </d>
                </div>
            </div>
        </div>
    </>
  )
}

export default MessageMainDiv