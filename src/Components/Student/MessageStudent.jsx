import React from 'react'
import { useSelector } from 'react-redux'

const MessageStudent = ({category, mainindex, individualEmail, partnerName }) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const messageStudent = async()=>{
    let sendMessageEndpoint = 'http://localhost:7777/staff/message'
    let messageBody = {
      messageSenderClass: staffInfo.class,
      messageSenderEmail: staffInfo.email,
      receiverRelationship: 'student',
      receiverClass: category,
      receiverEmail: individualEmail,
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
        <div className='w-full md:w-6/12 block mx-auto'>
            <textarea name="" id="message" className='w-full focus:outline-0 focus:ring-2 focus::ring-blue-600' rows={5} placeholder='Your Message here'>
            </textarea>
            <button onClick={messageStudent} className='w-full my-2 p-2 rounded-md text-center bg-blue-600 hover:bg-blue-500'>Send To {partnerName?partnerName:' Selaect A Student'}</button>
        </div>
    </>
  )
}

export default MessageStudent