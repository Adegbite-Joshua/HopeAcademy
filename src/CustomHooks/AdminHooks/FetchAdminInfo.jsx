import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdminInfo, setFetchingState } from '../../redux/adminInformation';
import axios from 'axios';

const FetchAdminInfo = () => {
  const adminInfo = useSelector((state) => state.adminInformation.adminInformation);
  const fetching = useSelector((state) => state.adminInformation.staffFetchingState);
  const socket = useSelector((state) => state.socketIO.socket);
//   const staffNotifications = useSelector((state) => state.adminInformation.staffNotifications);
//   const notificationFetchingState = useSelector((state) => state.adminInformation.notificationFetchingState);
  const dispatch = useDispatch();
  let localadminInfo = {};

  useEffect(() => {
    async function fetchData() {
      try {
        if (Object.keys(adminInfo).length === 0 && adminInfo.constructor === Object) {
          const endpoint = 'http://localhost:7777/admin/dashboard';
          const token = localStorage.adminToken;
          const res = await axios.post(endpoint, { token });
          
          if (res.status === 200) {
            dispatch(setAdminInfo(res.data));
            localadminInfo = res.data;
            dispatch(setFetchingState(false));
            socket.emit('connectSocketId', res.data._id);
          } else if (res.status !== 200) {
            
          }
        }
      } catch (error) {
        console.log(error);
      }

    //   try {
    //     if (Object.keys(staffNotifications).length === 0 && staffNotifications.constructor === Object) {
    //       const endpoint = 'http://localhost:7777/admin/notifications';
    //       const id = localadminInfo._id;
    //       const res = await axios.post(endpoint, { id });

    //       if (res.status === 200) {
    //         dispatch(fetchStaffNotifications(res.data));
    //         dispatch(setNotificationFetching(false));
    //       } else if (res.status !== 200) {

    //       }
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    }

    fetchData();
  }, [socket]);

  return [adminInfo, fetching];
};

export default FetchAdminInfo;

