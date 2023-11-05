import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import fetchStudentInfo from '../../src/CustomHooks/StudentHooks/fetchStudentInfo';
import NavBar from '../../src/Components/StudentComponents/NavBar';
import ClassMainDiv from '../../src/Components/StudentComponents/OnlineClass/ClassMainDiv';
import ClassSideDiv from '../../src/Components/StudentComponents/OnlineClass/ClassSideDiv';

const StudentOnlineClass = () => {
  document.querySelector('title').innerText = 'Online Class | Student'; 
  const [studentInfo, fetching] = fetchStudentInfo();
  const [studentNotifications, notificationFetchingState] = fetchStudentInfo();
  const [notificationType, setnotificationType] = useState('all')
  const [notifications, setnotifications] = useState([]);
  const [startClass, setstartClass] = useState(false);
  const [classId, setclassId] = useState('');
  const dispatch = useDispatch();


  const startClassFunction =(id)=>{
    setclassId(id);
    setstartClass(true);
  }
  
  return (
    <>
      <div id='pageContainer' className="grid h-screen md:flex md:flex-row bg-slate-300 relative ring-0">
        <NavBar />
        <ClassMainDiv startClass={startClass} classId={classId} setstartClass={setstartClass} />
        <ClassSideDiv startClassFunction={startClassFunction} />
        {/* {!notificationFetchingState && <>
                <NotificationMainDiv notifications={notifications} />
                <NotificationOtherSide setNotificationType={setNotificationType} searchNotification={searchNotification}/>
            </>} */}
      </div>
    </>
  )
}

export default StudentOnlineClass