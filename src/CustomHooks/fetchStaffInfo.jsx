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
        if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
          let endpoint = 'http://localhost:7777/staff/dashboard'
          let token = localStorage.token
          axios.post(endpoint, {token})
          .then((res)=>{
              console.log(res)
              if (res.status==200) {
                dispatch(fetchStaff(res.data))
                dispatch(setFetching(false))
                socket.emit('connectSocketId', res.data._id);
              } else if(res.status != 200){
                  state.staffInformation = 'error'
              }
          })
          .catch((err)=>{
              console.log(err);
          })
        }
    }, [socket])
  return [staffInfo, fetching];
};

export default fetchStaffInfo;
