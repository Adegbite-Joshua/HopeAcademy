import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllCourses, setFetchingState } from '../../redux/adminInformation';
import axios from 'axios';

const FetchAllCourses = () => {
  const allCourses = useSelector((state) => state.adminInformation.allCourses);
  const fetching = useSelector((state) => state.adminInformation.staffFetchingState);
  const socket = useSelector((state) => state.socketIO.socket);
  
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        if (allCourses.length === 0) {
          const endpoint = 'http://localhost:7777/admin/all_courses';
          const res = await axios.get(endpoint);
          
          if (res.status === 200) {
            dispatch(setAllCourses(res.data));
            localadminInfo = res.data;
            dispatch(setFetchingState(false));
          } else if (res.status !== 200) {
            
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [socket]);

  return [allCourses];
};

export default FetchAllCourses;

