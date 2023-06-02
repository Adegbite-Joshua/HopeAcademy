import React , {useState} from 'react'
import MessageStudent from './MessageStudent'
import StudentLastPerformance from './StudentLastPerformance'
import StudentScoreTable from './StudentScoreTable'
import { useSelector } from 'react-redux'
import ButtonComp from '../ButtonComp'
import axios from 'axios'



const StudentMainDIv = ({category, mainindex, individualEmail }) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const [assessment, setassessment] = useState({})
  const recieveAssessment =(value)=>{
    setassessment(value)
  }
  const saveStudentsAssesment =()=>{
    console.log(assessment)
    let allAssessment = {...assessment, staffClass: staffInfo.class, studentEmail: individualEmail }
    let endpoint = 'http://localhost:7777/staff/submitstudentsassessment'
    axios.post(endpoint, allAssessment)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
        <div className='StudentMainDIv middleDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto border border-2'>
            <h3 className=' text-center'>Adegbite Joshua</h3>
            <div className="w-full overflow-x-scroll">
                <StudentScoreTable index={mainindex} func={recieveAssessment}/>
            </div>
            <StudentLastPerformance/>
            <ButtonComp onClick={saveStudentsAssesment} name='Save Data'/>
            <MessageStudent category={category} mainindex={mainindex} individualEmail={individualEmail}/>
        </div>
    </>
  )
}

export default StudentMainDIv