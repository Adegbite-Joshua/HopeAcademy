import React, { useCallback, useEffect, useState } from 'react'
import InboxMainDiv from '../../src/Components/StudentComponents/Inbox/InboxMainDiv'
import OtherStudents from '../../src/Components/StudentComponents/Inbox/OtherStudents'
// import './style.scss'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { fetchAllStaffs, fetchAllStudents, fetchStudent, setFetched } from '../../src/redux/studentInformation'
// import Loader from '../../Loader'
import fetchStudentInfo from '../../src/CustomHooks/StudentHooks/fetchStudentInfo'
import NavBar from '../../src/Components/StudentComponents/NavBar'




const InboxPage = () => {
    document.querySelector("title").innerText = `Inbox | Student`
    const toggleSideNav =()=>{
        document.getElementById('OtherStudents').classList.toggle('OtherStudents')
    }
    const dispatch = useDispatch()
    
    const [studentInfo, fetching, termDetails] = fetchStudentInfo();  
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);
    let socket = useSelector((state)=>state.socketIO.socket);
    const [partnerId, setpartnerId] = useState('')
    const [partnerName, setpartnerName] = useState('')
    const [partnerCommonId, setpartnerCommonId] = useState('')
    let commonId = '';
    const [messages, setmessages] = useState([]);
    const [allMessages, setallMessages] = useState({})
    let chatId = {};



    const fetchAll =()=>{
      let studentEndpoint = 'http://localhost:7777/student/allstudents'
      let staffEndPoint = 'http://localhost:7777/student/allstaffs'
        if(allStaffs.length==0){
          dispatch(setFetched(true))
          axios.get(staffEndPoint)
          .then((res)=>{
            dispatch(fetchAllStaffs(res.data))
            dispatch(setFetched(false))
          })
          .catch((err)=>{
            console.log(err);
          })
        }
        if (allStudents.length==0) {
          dispatch(setFetched(true))
          axios.get(studentEndpoint)
          .then((res)=>{
            console.log(res);
            dispatch(fetchAllStudents(res.data))
            dispatch(setFetched(false))
          })
          .catch((err)=>{
            console.log(err);
          })
        }
    }

    useEffect(() => {
      fetchAll();

      const handleMessage = (messageDetails) => {
        if(allMessages[messageDetails.senderId]!=undefined){
          setallMessages((prevAllMessages) => {
              let newAll = { ...prevAllMessages };
              newAll[messageDetails.senderId] = [...newAll[messageDetails.senderId], messageDetails]
              return newAll;
          });
        }
      };

      const handleNotification = (notificationDetails) => {
        console.log(notificationDetails);
      };

      socket.on('getMessage', handleMessage);
      socket.on('getNotification', handleNotification);

      return () => {
          socket.off('getMessage');
          socket.off('getNotification');
      };
  }, [socket, allMessages]);

    const setAll =(partnerName, partnerId)=>{
      setpartnerId(partnerId)
      setpartnerName(partnerName)
      chatId = {
        firstId: partnerId,
        secondId: studentInfo._id
      }
      if (allMessages[partnerId]==undefined || allMessages[partnerId]==null) {
        axios.post('http://localhost:7777/student/createchat', chatId)
        .then((res)=>{
          console.log(res.data.created._id);
          setpartnerCommonId(res.data.created._id);
          commonId = partnerId
          setallMessages(
            (prevAllMessages) => {
              let newAll = { ...prevAllMessages };
              newAll[commonId] = res.data.chats
              return newAll;
            }
          );
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    }

    const fetchChatId = useCallback(()=>{
      axios.post('http://localhost:7777/student/createchat', chatId)
      .then((res)=>{
        setpartnerCommonId(res.data._id);
        // fetchMessages();
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [partnerCommonId])

    const fetchMessages = () =>{
      axios.post('http://localhost:7777/student/getmessage', partnerCommonId)
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    const sendMessage =(message)=>{
      let messageDetails = {
          messageDate: new Date().toLocaleDateString(),
          messageTime: new Date().toLocaleTimeString(),
          message: message,
          senderId: studentInfo._id,
          partnerCommonId: partnerCommonId 
      }
      let endpoint = 'http://localhost:7777/student/sendmessage'
      socket.emit('sendMessage', messageDetails, partnerId)
      setallMessages((prevAllMessages) => {
        let newAll = { ...prevAllMessages };
        newAll[partnerId] = [...newAll[partnerId], messageDetails]
        return newAll;
      });
    }


  return (
    <>
        <div className='flex w-full allWrap h-screen overflow-hidden'>
            <NavBar/>
            {/* {fetching==true && (<Loader/>)}
            {fetching==false && (<> */}
              <InboxMainDiv messages={allMessages[partnerId]} func={toggleSideNav} sendMessage={sendMessage} partnerName={partnerName} partnerCommonId={partnerCommonId} />
              <OtherStudents  func={toggleSideNav} func2={setAll}/>
            {/* </>)} */}
        </div>
    </>
  )
}

export default InboxPage

