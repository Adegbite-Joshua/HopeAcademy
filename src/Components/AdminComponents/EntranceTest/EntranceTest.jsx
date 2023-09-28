import React, {useState} from 'react'
import Navbar from '../NavBar/NavBar'
import SetQuestions from './SetQuestions'
import ViewParticipant from './ViewParticipant'
import ViewQuestions from './ViewQuestions'

const AdminEntranceTestView = () => {
    const [viewing, setviewing] = useState('setQuestions')

    const changeViewing=(value)=>{
        setviewing(value)
    }
  return (
    <div>
        <Navbar/>
        <div className=' grid grid-cols-1 md:flex pt-10 px-2'>
            <div className=' order-3 md:order-none basis-full md:basis-4/6 overflow-x-auto'>
                {viewing=='viewParticipant' && <ViewParticipant/>}
                {viewing=='setQuestions' && <SetQuestions/>}
                {viewing=='viewQuestions' && <ViewQuestions/>}
            </div>
            <div className=' order-1 md:order-none basis-full md:basis-2/6 p-5'>
                <p className='text-center'>Select Your Action</p>
                <div className="flex gap-2 justify-center items-center">
                    <button onClick={()=>changeViewing('setQuestions')} className='p-2 bg-blue-500 rounded-lg'>Set Questions</button>
                    <button onClick={()=>changeViewing('viewQuestions')} className='p-2 bg-blue-500 rounded-lg'>View Questions</button>
                    <button onClick={()=>changeViewing('viewParticipant')} className='p-2 bg-blue-500 rounded-lg'>View Participants</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminEntranceTestView