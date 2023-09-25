import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import DashboardNav from '../src/Components/StaffDashboard/DashboardNav';
import NotificationMainDiv from '../src/Components/StaffNotification/NotificationMainDiv';
import NotificationOtherSide from '../src/Components/StaffNotification/NotificationOtherDiv';
// import fetchStaffInfo from '../src/CustomHooks/fetchStaffInfo'
import fetchStaffInfo from '../src/CustomHooks/StaffHooks/fetchStaffInfo';


const StaffNotification = () => {
  let [staffInfo, fetching, staffNot, notificationFetchingState] = fetchStaffInfo();
  const [notificationType, setnotificationType] = useState('all')
  let staffNotifications = useSelector((state) => state.staffInformation.staffNotifications)?.notifications;
  const [notifications, setnotifications] = useState([])
  useEffect(() => {
    if (notificationType=='all') {
      setnotifications(staffNotifications)
    } else if (notificationType=='messages') {
      const filteredNotifications = staffNotifications.filter(notification => notification.type === 'messages');
      setnotifications(filteredNotifications);
    } else if (notificationType=='submits') {
      const filteredNotifications = staffNotifications.filter(notification => notification.type === 'submits');
      setnotifications(filteredNotifications);
    }
  }, [notificationType])
  const setNotificationType =(type)=>{
    setnotificationType(type)
  }
  const searchNotification = (params)=>{
    if (params.trim().length>0) {
      const filtered = staffNotifications.filter(notification => notification.name.includes(params));
      setnotifications(filtered);
    } else {
      setNotificationType(notificationType)
    }
  }
  return (
    <>
        <div id='pageContainer' className="grid w-screen md:flex md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            {!notificationFetchingState && <>
                <NotificationMainDiv notifications={notifications} />
                <NotificationOtherSide setNotificationType={setNotificationType} searchNotification={searchNotification}/>
            </>}
        </div>
    </>
  )
}

export default StaffNotification