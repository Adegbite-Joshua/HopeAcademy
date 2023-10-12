import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import MessageMainDiv from './MessageMainDiv'
import MessageOtherDiv from './MessageOtherDiv'
import { fetchStaff, fetchAllStaffs, fetchAllStudents, setFetching } from '../../redux/staffInformation'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../Loader'
import { useParams } from 'react-router-dom'
import SnackBar from '../SnackBar'
import fetchStaffInfo from '../../CustomHooks/StaffHooks/fetchStaffInfo'



const StaffMessage = () => {
  let paramsValue = useParams();
  const dispatch = useDispatch();
  // let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  // let fetching = useSelector((state)=>state.staffInformation.staffFetchingState)
  let socket = useSelector((state)=>state.socketIO.socket);
  let allStaffs = useSelector((state)=>state.staffInformation.allStaffs)
  let allStudents = useSelector((state)=>state.staffInformation.allStudents)
  const [snacksBarBody, setsnacksBarBody] = useState('')
  const [snacksBarType, setsnacksBarType] = useState('info')
  const [partnerId, setpartnerId] = useState('')
  const [partnerName, setpartnerName] = useState('')
  const [partnerCommonId, setpartnerCommonId] = useState('')
  let commonId = '';
  const [messages, setmessages] = useState([]);
  const [allMessages, setallMessages] = useState({})
  let chatId = {};
  
  const showSnackBar = () => {
      var x = document.getElementById("snackbarContainer");
      x.className = "show";
      setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
  }


  // const fetchStaffInformation = ()=>{
  //   let endpoint = 'http://localhost:7777/staff/dashboard'
  //   let staffEmail = localStorage.getItem('staffemail')
  //   let staffPassword = localStorage.getItem('staffpassword')
  //   let staffClass = Number(localStorage.getItem('staffclass'))
  //   let details = {
  //       staffClass,
  //       staffEmail,
  //       staffPassword
  //   }
  //   if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
  //     axios.post(endpoint, details)
  //     .then((res)=>{
  //         console.log(res)
  //         if (res.status==200) {
  //           dispatch(fetchStaff(res.data))
  //           dispatch(setFetching(false))
  //           setDefault()
  //         } else if(res.status != 200){
  //             state.staffInformation = 'error'
  //         }
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  //   }
  //   if (allStaffs.length==0) {
  //     let allstaffsendpoint = 'http://localhost:7777/staff/allstaffs'
  //     dispatch(setFetching(true))
  //     axios.get(allstaffsendpoint, details)
  //     .then((res)=>{
  //         console.log(res)
  //         if (res.status==200) {
  //           dispatch(fetchAllStaffs(res.data))
  //           dispatch(setFetching(false))
  //         } else if(res.status != 200){
  //             state.staffInformation = 'error'
  //         }
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  //   }
  //   if (allStudents.length==0) {
  //     let allstudentsendpoint = 'http://localhost:7777/staff/allstudents'
  //     dispatch(setFetching(true))
  //     axios.get(allstudentsendpoint, details)
  //     .then((res)=>{
  //         console.log(res)
  //         if (res.status==200) {
  //           dispatch(fetchAllStudents(res.data))
  //           dispatch(setFetching(false))
  //         } else if(res.status != 200){
  //             state.staffInformation = 'error'
  //         }
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  //   }
  // }
  let [staffInfo, fetching] = fetchStaffInfo();


  const validateStaff =()=>{
    let token = localStorage.token
    let validateEndpoint = 'http://localhost:7777/staff/validatetoken'
    axios.get(validateEndpoint, {headers : {
      "Authorization": `Bearer ${token}`,
      "Content-Toe": "application/json",
      "Accept": "application/json"
    }})
    .then((res)=>{
      if (res.status == 200) {
        fetchStaffInformation()
      } else{
        setsnacksBarBody('Invalid Acesss Token')
        setsnacksBarType('error')
        showSnackBar()
        setTimeout(() => navigate('/signin'), 3000);
      }
    })
    .catch((error)=>{
      setsnacksBarBody('Invalid Acesss Token')
      setsnacksBarType('error')
      showSnackBar()
      setTimeout(() => navigate('/signin'), 3000);
      console.log(error);
    })
  }
  useEffect(() => {
    // validateStaff()
    setDefault()
    fetchAll()
    const handleMessage = (messageDetails) => {
      if(allMessages[messageDetails.senderId]!=undefined){
        setallMessages((prevAllMessages) => {
            let newAll = { ...prevAllMessages };
            newAll[messageDetails.senderId] = [...newAll[messageDetails.senderId], messageDetails]
            return newAll;
        });
      }
    };

    socket.on('getMessage', handleMessage);

    return () => {
        socket.off('getMessage');
    };
  }, [socket, allMessages])

  const fetchAll =()=>{
    let studentEndpoint = 'http://localhost:7777/student/allstudents'
    let staffEndPoint = 'http://localhost:7777/student/allstaffs'
      if(allStaffs.length==0){
        dispatch(setFetching(true))
        axios.get(staffEndPoint)
        .then((res)=>{
          console.log('fetched staff')
          dispatch(fetchAllStaffs(res.data))
          dispatch(setFetching(false))
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      if (allStudents.length==0) {
        dispatch(setFetching(true))
        axios.get(studentEndpoint)
        .then((res)=>{
          dispatch(fetchAllStudents(res.data))
          dispatch(setFetching(false))
        })
        .catch((err)=>{
          console.log(err);
        })
      }
  }

  const sendMessage =(message)=>{
    let messageDetails = {
        messageDate: new Date().toLocaleDateString(),
        messageTime: new Date().toLocaleTimeString(),
        message: message,
        senderId: staffInfo._id,
        senderName: `${staffInfo.firstName} ${staffInfo.lastName}`,
        partnerCommonId: partnerCommonId 
    }
    socket.emit('sendMessage', messageDetails, partnerId)
    setallMessages((prevAllMessages) => {
      let newAll = { ...prevAllMessages };
      newAll[partnerId] = [...newAll[partnerId], messageDetails]
      return newAll;
    });
  }

  const setPartner =(partnerName, partnerId)=>{
    setpartnerId(partnerId)
    setpartnerName(partnerName)
    chatId = {
      firstId: partnerId,
      secondId: staffInfo._id
    }
    console.log(chatId)
    if (allMessages[partnerId]==undefined || allMessages[partnerId]==null) {
      axios.post('http://localhost:7777/staff/createchat', chatId)
      .then((res)=>{
        setpartnerCommonId(res.data.created._id);
        commonId = partnerId
        setallMessages(
          (prevAllMessages) => {
            let newAll = { ...prevAllMessages };
            newAll[commonId] = res.data.chats;
            return newAll;
          }
        );
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }

  const setDefault=()=>{
    if(paramsValue.id && Object.keys(staffInfo).length > 0 && staffInfo.constructor === Object && allStudents.length>0){
      let student = allStudents[staffInfo.class].filter((student)=>student._id==paramsValue.id)
      setPartner(`${student.firstName} ${student.lastName}`,paramsValue.id )
    }
  }
  return (
    <>
        <div className="StaffMessage flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav className=' order-1'/>
            {fetching && <Loader/>}
            {fetching==false && <>
              <div className='flex  md:basis-11/12 flex-col-reverse md:flex-row h-screen border-2'>
                <MessageMainDiv messages={allMessages[partnerId]} sendMessage={sendMessage} partnerName={partnerName} partnerCommonId={partnerCommonId} />
                <MessageOtherDiv setPartner={setPartner}/>
              </div>
            </>}
        </div>
        <div id='snackbarContainer'><SnackBar body={snacksBarBody} type={snacksBarType}/></div>
    </>
  )
}

export default StaffMessage