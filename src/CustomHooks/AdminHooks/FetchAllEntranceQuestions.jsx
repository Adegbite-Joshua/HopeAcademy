import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setEntranceQuestions } from '../../redux/adminInformation';

const FetchEntranceQuestions = () => {
  const entranceQuestions = useSelector((state) => state.adminInformation.entranceQuestions);
  const fetching = useSelector((state) => state.adminInformation.staffFetchingState);
  const socket = useSelector((state) => state.socketIO.socket);
  
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // try {
      //   if (entranceQuestions.length === 0) {
      //       let endpoint = 'http://localhost:7777/admin/get_entrance_questions'
      //       axios.get(endpoint)
      //       .then((res)=>{
      //         if(res.status==200){
      //             dispatch(setEntranceQuestions(res.data))
      //         }
      //       })
      //       .catch((error)=>{
      //         console.log(error)
      //       })
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }

    fetchData();
  }, [socket]);

  return [[entranceQuestions]];
};

export default FetchEntranceQuestions;

