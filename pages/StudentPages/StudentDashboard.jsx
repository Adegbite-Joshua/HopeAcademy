import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import Loader from '../../src/Components/StudentComponents/Loader'
import { fetchStudent, setFetched } from '../../src/redux/studentInformation'
import DisplayToast from '../../src/CustomHooks/DisplayToast'
import StudentMainDiv from '../../src/Components/StudentComponents/Dashboard/StudentMainDiv'
import NavBar from '../../src/Components/StudentComponents/NavBar'
import Tasks from '../../src/Components/StudentComponents/Dashboard/Tasks'
import fetchStudentInfo from '../../src/CustomHooks/StudentHooks/fetchStudentInfo'
import checkStudentFeeStatus from '../../src/CustomHooks/StudentHooks/checkStudentFeeStatus'



const StudentDashboard = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [addingTask, setaddingTask] = useState(false);
    document.querySelector("title").innerText = `Dashboard`;
    let values = useParams()
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    let socket = useSelector((state)=>state.socketIO.socket);
    const [paymentDisplayOption] = checkStudentFeeStatus();
    paymentDisplayOption=='indebt'?navigate('/feepayment'):'';


    // const useSoc = useSocketConnection('http://localhost:7777')
    // const getInfo =()=>{
    //   fetchStudentInformation()
    // }
    useEffect(() => {
      // getInfo()
      validateStudent()
      socket.emit('connectSocketId', studentInfo._id)
    }, [])

    // const fetchStudentInformation =()=>{
    //   if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
    //     dispatch(setFetched(true))
    //     let endpoint = 'http://localhost:7777/student/dashboard'
    //     // let details = {
    //     //   class: Number(localStorage.getItem('studentclass')),
    //     //   password: localStorage.getItem('studentpassword'),
    //     //   matricNumber: localStorage.getItem('studentmatric')
    //     // }
    //     let token = localStorage.getItem('token')
    //     axios.get(endpoint, {headers : {
    //       "Authorization": `Bearer ${token}`,
    //       "Content-Toe": "application/json",
    //       "Accept": "application/json"
    //     }})  
    //     .then((res)=>{
    //       if (res.status==200) {
    //         dispatch(fetchStudent(res.data))
    //         dispatch(setFetched(false))
    //       } else{
    //         console.log('error');
    //       }
    //     })
    //   }
    // }

    let [name] = fetchStudentInfo();

    const validateStudent =()=>{
      let token = localStorage.token
      let validateEndpoint = 'http://localhost:7777/student/validatedashboard'
      axios.get(validateEndpoint, {headers : {
        "Authorization": `Bearer ${token}`,
        "Content-Toe": "application/json",
        "Accept": "application/json"
      }})
      .then((res)=>{
        console.log(res);
        if (res.status != 200) {
        //   navigate('/student/signin')
          // const connect = socketConnect('http://localhost:7777/student');
        }

      })
      .catch((error)=>{
        // navigate('/student/signin')
        console.log(error);
      })
    }

    const closeAddToTask = () => {
      document.getElementById('popup').classList.remove("open-popup")
    }
    const openAddToTask = () => {
      document.getElementById('popup').classList.add("open-popup")
    }

    const showLink =()=>{
      console.log(`${studentInfo.pictureUrl.split('upload/')[0]}upload/r_max,q_50/${studentInfo.pictureUrl.split('upload/')[1]}`)
    }
    window.showLink = showLink

    const addToTasks =()=>{
      setaddingTask(true)
      let taskDetails = {
        taskDate: taskTime.value.split('T')[0],
        taskTime: taskTime.value.split('T')[1],
        taskBody: taskBody.value,
        class: Number(studentInfo.class),
        email: studentInfo.email,
        token: localStorage.getItem('token')
      }
      console.log(taskDetails);
      let endpoint = 'http://localhost:7777/student/addtotask'
      axios.post(endpoint, taskDetails)
      .then((res)=>{
        setaddingTask(false)
        closeAddToTask()
        let [show] = DisplayToast('success', 'Task Added Successfully!');
        dispatch(fetchStudent(res.data))
        taskBody.value = ''
        taskTime.value = ''
      })
      .catch((error)=>{
        setaddingTask(false)
        closeAddToTask()
        let [show] = DisplayToast('error', 'Error Saving Your Task');
        // console.log(error);
      })
    }

  return (
    <>
      <div className='flex allWrap'>
        <NavBar />
        {fetching && <Loader />}
        {!fetching && (
          <>
            <StudentMainDiv />
            <div className='inline-block topSpace taskDiv relative'>
              <h2 className='sticky top-0 bg-blue-500 text-white p-2 rounded mx-3'>Your Tasks:</h2>
              {studentInfo.tasks ? (
                studentInfo.tasks.map((task, index) => <Tasks date={task.taskDate} index={index} task={task.taskBody} wholeTask={task} />)
              ) : (
                <Tasks date='07/02/2005' task='No Task Added Yet' empty={true} />
              )}
              <button className='btn btn-outline-info block mx-auto mt-2' onClick={openAddToTask}>
                <i className='fas fa-plus'></i> Add New
              </button>
            </div>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center popup' id='popup'>
              <div className='bg-white p-4 rounded-lg w-96'>
                <button className='btn-close right-0 top-0 mt-2 mr-2' onClick={closeAddToTask}></button>
                <textarea name='taskBody' id='taskBody' className='w-full mb-4 h-32 p-2 border rounded' placeholder='Add Task ...'></textarea>
                <input type='datetime-local' className='w-full mb-4 p-2 border rounded' id='taskTime' />
                <button
                  type='button'
                  disabled={addingTask ? true : false}
                  id='button1'
                  onClick={addToTasks}
                  className={`w-full p-2 rounded bg-blue-500 text-white ${addingTask ? 'cursor-not-allowed' : 'hover:bg-blue-600'}`}
                >
                  {addingTask ? 'Adding' : 'Add Task'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default StudentDashboard