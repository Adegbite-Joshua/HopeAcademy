import axios from 'axios'
import React , {useState, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader'
import { fetchStaff, setFetching } from '../../redux/staffInformation'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SettingMainDiv from './SettingMainDiv'
import SettingOtherDiv from './SettingOtherDiv'


const StaffSetting = () => {
  const [displaying, setdisplaying] = useState('allSettings')
  const viewSetting=(response)=>{
    setdisplaying(response)
      // console.log(displaying))
  }
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let fetching = useSelector((state)=>state.staffInformation.staffFetchingState)
  
  const fetchStaffInformation = async()=>{
    console.log(staffInfo);
    let endpoint = 'http://localhost:7777/staff/dashboard'
    if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
      dispatch(setFetching(true))
      let token = localStorage.token
      axios.post(endpoint, token)
      .then((res)=>{
          if (res.status==200) {
            dispatch(fetchStaff(res.data))
            dispatch(setFetching(false))
          } else if(res.status != 200){
              state.staffInformation = 'error'
          }
      })
      .catch((err)=>{
          console.log(err);
      })
    }
  }
  useEffect(() => {
    fetchStaffInformation()
  }, [])
  return (
    <>
        <div className='StaffSetting containerAll overflow-y-hidden'>
            <DashboardNav/>
            {fetching && <Loader/>}
            {fetching==false && <>
              <SettingMainDiv disp={displaying}/>
              <SettingOtherDiv func={viewSetting}/>
            </>}
        </div>
    </>
  )
}

export default StaffSetting