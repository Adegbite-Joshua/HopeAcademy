import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { useSelector } from 'react-redux';
import { subjects } from '../../../../constants/subjects';
import SubjectResource from './SubjectResource'

const ResourcesContainer = ({subjectDetails, func, studentResources}) => {
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  let fetching = useSelector((state)=>state.studentInformation.staffFetchingState);
  const fetchResources = ()=>{
    let endpoint = 'http://localhost:7777/student/fetchsubjectresources'
    let payload = {
      class: studentInfo.class,
      subject: subjects[subjectDetails.subjectIndex]
    }
    if (studentResources.length==0) {
      console.log(payload);
      axios.post(endpoint, payload)
      .then((res)=>{
        console.log(res)
        func(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  useEffect(()=>{
    fetchResources()
  }, [subjectDetails])

  return (
    <>
        {studentResources.length>0?studentResources.map((resource, index)=>(
          <SubjectResource resource={resource}/>
        )): <p className='p-2 text-center'>This Subject Has No Resources</p>}
    </>
  )
}

export default ResourcesContainer