import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../../Loader'
import SubjectMainDiv from '../../src/Components/StudentComponents/Subject/SubjectMainDiv'
import SubjectSideDiv from '../../src/Components/StudentComponents/Subject/SubjectSideDiv'
import fetchStudentInfo from '../../src/CustomHooks/StudentHooks/fetchStudentInfo'
import { fetchAllStaffs, fetchStudent, setFetched } from '../../src/redux/studentInformation'
import NavBar from '../../src/Components/StudentComponents/NavBar'


const StudentsSubject = () => {
    document.querySelector("title").innerText = `Subjects`
    const [viewingSubject,setviewingSubject ] = useState(0)
    const dispatch = useDispatch();
    const toggleSideNav =()=>{
        document.getElementById('SubjectSideDiv').classList.toggle('SubjectSideDiv')
    }

    const setVieingSubject =(subjectIndex)=>{
      setviewingSubject(subjectIndex)
    }

    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);
    
    useEffect(() => {
      fetchStudentInformation()
      validateStudent()
    }, [])
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
          navigate('/signin')
        }
      })
      .catch((error)=>{
        navigate('/signin')
        console.log(error);
      })
    }
    const fetchStudentInformation =()=>{
      if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
        dispatch(setFetched(true))
        let endpoint = 'http://localhost:7777/student/dashboard'
        let details = {
          class: Number(localStorage.getItem('studentclass')),
          password: localStorage.getItem('studentpassword'),
          matricNumber: localStorage.getItem('studentmatric')
        }
        axios.post(endpoint, details)
        .then((res)=>{
          if (res.status==200) {
            dispatch(fetchStudent(res.data))
            dispatch(setFetched(false))
          } else{
            console.log('error');
          }
        })
      }
      if(allStaffs.length==0){
        let staffEndPoint = 'http://localhost:7777/student/allstaffs'
        dispatch(setFetched(true))
        axios.get(staffEndPoint)
        .then((res)=>{
          console.log(res);
          dispatch(fetchAllStaffs(res.data))
          dispatch(setFetched(false))
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    }
  return (
    <>
        <div className='d-flex w-100'>
            <NavBar/>
            {fetching && <Loader/>}
            {fetching==false && <>
              <SubjectMainDiv subjectIndex={viewingSubject} func={toggleSideNav}/>
              <SubjectSideDiv func={toggleSideNav} func2={setVieingSubject}/>
            </>}
        </div>
    </>
  )
}

export default StudentsSubject