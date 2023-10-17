import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import { fetchStudent, setFetched } from '../../redux/studentInformation';


const fetchStudentInfo = () => {
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    let socket = useSelector((state)=>state.socketIO.socket);
    let dispatch = useDispatch();

    useEffect(()=>{
        if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
          dispatch(setFetched(true))
          let endpoint = 'http://localhost:7777/student/dashboard'
          let token = localStorage.getItem('studentToken')
          axios.get(endpoint, {headers : {
            "Authorization": `Bearer ${token}`,
            "Content-Toe": "application/json",
            "Accept": "application/json"
          }})  
          .then((res)=>{
            if (res.status==200) {
              dispatch(fetchStudent(res.data))
              dispatch(setFetched(false))
              socket.emit('connectSocketId', res.data._id);
            } else{
              console.log('error');
            }
          })
      }
    }, [socket])
  return [studentInfo];
};

export default fetchStudentInfo;
