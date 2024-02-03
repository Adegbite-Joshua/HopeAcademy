import React , {useState} from 'react'
import MessageStudent from './MessageStudent'
import StudentLastPerformance from './StudentLastPerformance'
import StudentScoreTable from './StudentScoreTable'
import { useSelector } from 'react-redux'
import ButtonComp from '../../ButtonComp'
import axios from 'axios'
import SnackBar from '../../SnackBar'
import { backendurl } from '../../../../constants/backendurl';




const StudentMainDIv = ({category, mainindex, individualEmail, partnerName, classStudents}) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const [assessment, setassessment] = useState({})
  const recieveAssessment =(value)=>{
    setassessment(value)
  }
  const saveStudentsAssesment =()=>{
    console.log(assessment)
    let allAssessment = {...assessment, staffClass: Number(staffInfo.class), studentEmail: individualEmail, subjectIndex: Number(staffInfo.class) }
    let endpoint = `${backendurl}staff/submitstudentsassessment`
    axios.post(endpoint, allAssessment)
    .then((res)=>{
      console.log(res)
      setsnacksBarBody("Student's Assessments Updated Successfully")
      setsnacksBarType('info')
      showSnackBar()
    })
    .catch((err)=>{
      console.log(err)
      setsnacksBarBody("Error Updating Student's Assessments")
      setsnacksBarType('error')
      showSnackBar()
    })
    // console.log(allAssessment);
  }
  const [snacksBarBody, setsnacksBarBody] = useState('Email')
  const [snacksBarType, setsnacksBarType] = useState('info')

  const showSnackBar = () => {
      // Get the snackbar DIV
      // alert('showing')
      var x = document.getElementById("snackbarContainer");
      x.className = "show";
    
      setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
  }
  return (
    <>
        <div className='StudentMainDIv middleDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto border border-2'>
            <h3 className=' text-center'>Adegbite Joshua</h3>
            <div className="w-full overflow-x-scroll">
                <StudentScoreTable classStudents={classStudents} individualEmail={individualEmail} index={mainindex} func={recieveAssessment}/>
            </div>
            <StudentLastPerformance/>
            <ButtonComp onClick={saveStudentsAssesment} name={individualEmail?`Save ${partnerName}'s Data`:'Select A Students Name'}/>
            <MessageStudent category={category} mainindex={mainindex} individualEmail={individualEmail} partnerName={partnerName}/>
        </div>
        <div id='snackbarContainer'><SnackBar body={snacksBarBody} type={snacksBarType}/></div>
    </>
  )
}

export default StudentMainDIv