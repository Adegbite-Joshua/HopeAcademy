import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setbanksList, } from '../redux/generalInformation';
import axios from 'axios';

const fetchBanksList = () => {
  const banksList = useSelector((state) => state.generalInformation.banksList);
  const socket = useSelector((state) => state.socketIO.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
          if(banksList.length==0) {
            const endpoint = 'http://localhost:7777/banks_list';
            const res = await axios.get(endpoint);
            
            if (res.status === 200) {
                dispatch(setbanksList(res.data));
            }
          }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return [banksList];
};

export default fetchBanksList;

