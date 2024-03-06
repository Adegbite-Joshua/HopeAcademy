import React from 'react'
import FetchAdminInfo from '../../../CustomHooks/AdminHooks/FetchAdminInfo'


const Profile = () => {
  const [adminInfo, fetching] = FetchAdminInfo();

  return (
    <div className='p-5 mx-auto'>
        <img src='/school_logo.png' className='mx-auto h-32 md:h-40  rounded-full border-2 border-double border-blue-600' alt="" />
        <h4 className='text-4xl text-center'>{`${adminInfo.firstName} ${adminInfo.lastName}`}</h4>
    </div>
  )
}

export default Profile