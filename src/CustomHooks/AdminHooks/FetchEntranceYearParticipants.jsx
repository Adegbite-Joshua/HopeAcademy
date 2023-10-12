import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEntranceParticipants, setFetchingState } from '../../redux/adminInformation';
import axios from 'axios';

const FetchEntranceYearParticipants = (year) => {
  const entranceParticipants = useSelector((state) => state.adminInformation.entranceParticipants);
  const fetching = useSelector((state) => state.adminInformation.staffFetchingState);
  const socket = useSelector((state) => state.socketIO.socket);
  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(year)
    const currentYear = new Date().getFullYear();

    async function fetchData() {
      try {
        if (!entranceParticipants[year]) {
          const endpoint = 'http://localhost:7777/admin/get_entrance_year_participants';
          const res = await axios.post(endpoint, {year});
          
          if (res.status === 200) {
            dispatch(setEntranceParticipants({year,participants: res.data}));
            dispatch(setFetchingState(false));
          } else if (res.status !== 200) {
            
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [socket, year]);

  return [entranceParticipants];
};

export default FetchEntranceYearParticipants;
