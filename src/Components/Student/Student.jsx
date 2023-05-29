import React, { useState } from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import StudentMainDIv from './StudentMainDIv'
import StudentOtherDiv from './StudentOtherDiv'

const Student = () => {
  const [category, setcategory] = useState(null)
  const [mainindex, setmainindex] = useState(null)
  const [individualEmail, setemail] = useState(null)
  const setViewingMessage =(cat, main, email)=>{
    // console.log(staffInfo.messages)
    console.log(cat, main, email);
    category!=''?setcategory(cat):''
    mainindex!=''?setmainindex(main):''
    individualEmail!=''?setemail(email):''
  }
  return (
    <>
        <div className=' relative flex w-screen h-auto md:h-screen flex-col md:flex-row bg-slate-300 ring-0'>
            <DashboardNav/>
            <StudentMainDIv category={category} mainindex={mainindex} individualEmail={individualEmail}/>
            <StudentOtherDiv func={setViewingMessage}/>
        </div>
    </>
  )
}

export default Student