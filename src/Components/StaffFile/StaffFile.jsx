import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import FileMainDashboard from './FileMainDashboard'
import FileOtherDiv from './FileOtherDiv'

const StaffFile = () => {
  let endpoint = 'http://localhost:7777/staff/dashboard'
    let staffEmail = localStorage.getItem('staffemail')
    let staffPassword = localStorage.getItem('staffpassword')
    let staffClass = localStorage.getItem('staffclass')
    let details = {
        staffClass,
        staffEmail,
        staffPassword
    }
  //   axios.post(endpoint, details)
  //   .then((res)=>{
  //       console.log(res)
  //       if (res.status==200) {
  //         dispatch(fetchStaff(res.data))
  //         // console.log(staffInfo);
  //           // Object.assign(state.staffInformation=res.data)
  //           // state.staffInformation = res.data
  //       } else if(res.status != 200){
  //           state.staffInformation = 'error'
  //       }
  //   })
  //   .catch((err)=>{
  //       console.log(err);
  //   })
  //   // console.log(staffInfo);
  //   // if (staffInfo == 'error') {
  //   //   navigate('/signin')
  //   // }
  // }
  useEffect(() => {
    decide()
  }, [])
  return (
    <>
        <div className='StaffFile containerAll'>
            <DashboardNav/>
            <FileMainDashboard/>
            <FileOtherDiv/>
        </div>
    </>
  )
}

export default StaffFile