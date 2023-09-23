import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchStaff, setFetching } from '../redux/staffInformation';
import axios from 'axios'



const fetchStaffInfo = () => {
    let staffInfo = useSelector((state)=>state.staffInformation.staffInformation);
    let fetching = useSelector((state)=>state.staffInformation.staffFetchingState);
    let socket = useSelector((state)=>state.socketIO.socket);
    let dispatch = useDispatch();

    useEffect(()=>{
        if(Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object){
          dispatch(setFetching(true))
          let endpoint = 'http://localhost:7777/student/dashboard'
          let token = localStorage.getItem('token')
          axios.get(endpoint, {headers : {
            "Authorization": `Bearer ${token}`,
            "Content-Toe": "application/json",
            "Accept": "application/json"
          }})  
          .then((res)=>{
            if (res.status==200) {
              dispatch(fetchStaff(res.data))
              dispatch(setFetching(false))
              socket.emit('connectSocketId', res.data._id);
            } else{
              console.log('error');
            }
          })
      }
    }, [socket])
  return ['ade'];
};

export default fetchStaffInfo;
