import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SubmitMainDIv from './SubmitMainDIv'
import SubmitOtherDiv from './SubmitOtherDiv'

const StaffSubmit = () => {
  return (
    <>
        <div className=' StaffSubmit containerAll'>
            <DashboardNav/>
            <SubmitMainDIv/>
            <SubmitOtherDiv/>
        </div>
    </>
  )
}

export default StaffSubmit