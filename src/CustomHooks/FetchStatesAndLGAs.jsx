import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setstates, setLGAs} from '../redux/generalInformation';
import axios from 'axios';

const FetchStatesAndLGAs = (value = 'Oyo') => {
  const banksList = useSelector((state) => state.generalInformation.banksList);
  const states = useSelector((state) => state.generalInformation.states);
  const LGAs = useSelector((state) => state.generalInformation.LGAs);
  const socket = useSelector((state) => state.socketIO.socket);
//   const staffNotifications = useSelector((state) => state.adminInformation.staffNotifications);
//   const notificationFetchingState = useSelector((state) => state.adminInformation.notificationFetchingState);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
          if(states.length==0) {
            let states = await axios.get('https://nga-states-lga.onrender.com/fetch')
            dispatch(setstates(states.data))
          }
          const LGAS = await axios.get(`https://nga-states-lga.onrender.com/?state=${value}`)
          dispatch(setLGAs(LGAS.data))
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return [states, LGAs];
};

export default FetchStatesAndLGAs;

