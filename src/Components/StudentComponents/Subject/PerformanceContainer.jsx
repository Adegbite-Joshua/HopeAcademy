import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'
import axios from 'axios'
import { subjects } from '../../../../constants/subjects';
// import subjects from '../../subjectArray';


const PerformanceContainer = ({subjectIndex}) => {
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);
    const [fileName, setfileName] = useState('')
    const [fileBase64, setfileBase64] = useState('')
    const selectFile =(e)=>{
        let file = e.target.files[0]
        setfileName(file.name)
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setfileBase64(reader.result)
        }

    }
    const sendSubmit =()=>{
        let submitDetails = {
            studentEmail: studentInfo.email,
            fileName,
            fileBase64,
            staffClass: Number(studentInfo.class),
            // staffEmail: '',
            subjectName: subjects[subjectIndex],
            fileDescription: document.getElementById('fileDescription').value
        }
        console.log(submitDetails);
        let endpoint = 'http://localhost:7777/student/sendsubmit'
        // let {fileName, ...rest} = submitDetails
        axios.post(endpoint, submitDetails)
        .then((res)=>{
            if(res.status==200){
                alert('submit sent')
            } else if(res.status==402){
                alert('an error occurred, try again')
            }
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    
  return (
    <div className="w-full">
    <div className="resultDiv overflow-auto w-full">
      <ResultsDisplay subjectIndex={subjectIndex} />
    </div>
    <div className="flex gap-2 text-center mt-3">
      <SubjectPerformance />
      <SubjectPerformance />
      <SubjectPerformance />
    </div>
    <div>
      <h4>Submit Your Work to Your Teacher</h4>
      <label htmlFor="fileDescription">File Description</label>
      <input
        className="w-full px-3 py-2 border rounded my-2"
        type="text"
        id="fileDescription"
        placeholder="File Description"
      />
      <input
        onChange={(e) => selectFile(e)}
        className="w-full px-3 py-2 border rounded my-2"
        type="file"
        accept=".pdf, .docx, .txt"
      />
      <button
        onClick={sendSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded my-2"
      >
        Submit
      </button>
    </div>
  </div>
  )
}

export default PerformanceContainer