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
import FetchNoticesAndNews from '../../src/CustomHooks/FetchNoticesAndNews'



const StudentDashboard = () => {
    document.querySelector('title').innerText = 'Dashboard | Student'; 
    const [studentInfo, fetching, termDetails] = fetchStudentInfo();  
    const [noticesAndNews] = FetchNoticesAndNews();  
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [addingTask, setaddingTask] = useState(false);
    document.querySelector("title").innerText = `Dashboard`;
    let values = useParams()
    let socket = useSelector((state)=>state.socketIO.socket);
    const [paymentDisplayOption] = checkStudentFeeStatus();
    paymentDisplayOption=='indebt'?navigate('/feepayment'):'';

    const closeAddToTask = () => {
      document.getElementById('popup').classList.remove("open-popup")
    }
    const openAddToTask = () => {
      document.getElementById('popup').classList.add("open-popup")
    }

    const showLink =()=>{
      console.log(`${studentInfo.pictureUrl.split('upload/')[0]}upload/r_max,q_50/${studentInfo.pictureUrl.split('upload/')[1]}`)
    }

    const addToTasks =()=>{
      setaddingTask(true)
      let taskDetails = {
        taskDate: taskTime.value.split('T')[0],
        taskTime: taskTime.value.split('T')[1],
        taskBody: taskBody.value,
        class: Number(studentInfo.class),
        email: studentInfo.email,
        token: localStorage.getItem('studentToken')
      }
      let endpoint = 'http://localhost:7777/student/addtotask'
      axios.post(endpoint, taskDetails)
        .then((res)=>{
          setaddingTask(false)
          closeAddToTask()
          DisplayToast('success', 'Task Added Successfully!');
          dispatch(fetchStudent(res.data))
          taskBody.value = ''
          taskTime.value = ''
        })
        .catch((error)=>{
          setaddingTask(false)
          closeAddToTask()
          DisplayToast('error', 'Error Saving Your Task');
        })
    }

  return (
    <>
      <div className='grid grid-cols-1 overflow-y-auto md:flex allWrap border-2 md:h-screen'>
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
              <button className='p-2 bg-yellow-300 block mx-auto mt-2' onClick={openAddToTask}>
                <i className='fa fa-plus'></i> Add New
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