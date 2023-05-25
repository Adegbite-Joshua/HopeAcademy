import axios from 'axios'
import React , {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff } from '../../redux/staffInformation'
import ButtonComp from '../ButtonComp'

const SubjectSetting = () => {
    // const setSubject =()=>{document.getElementById('staffIndex')[staffInfo.staffIndex].selected = 'true'}
    const subjects = [
        'MATHEMATICS',
        'ENGLISH LANGUAGE',
        'YORUBA',
        'CIVIC EDUCATION',
        'COMPUTER STUDIES',
        'GEOGRAPHY',
        'ECONOMICS',
        'PHYSICS',
        'CHEMISTRY',
        'BIOLOGY',
        'ANIMAL HUSBANDRY',
        'FURTHER MATHEMATICS',
        'TECHNICAL DRAWING '
      ]
      const dispatch = useDispatch()
      let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
      
      const decide = ()=>{
        let endpoint = 'http://localhost:7777/staff/dashboard'
        let staffEmail = localStorage.getItem('staffemail')
        let staffPassword = localStorage.getItem('staffpassword')
        let staffClass = localStorage.getItem('staffclass')
        let details = {
            staffClass,
            staffEmail,
            staffPassword
        }
        axios.post(endpoint, details)
        .then((res)=>{
            console.log(res)
            if (res.status==200) {
              dispatch(fetchStaff(res.data))
              // console.log(staffInfo);
                // Object.assign(state.staffInformation=res.data)
                // state.staffInformation = res.data
            } else if(res.status != 200){
                state.staffInformation = 'error'
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        // console.log(staffInfo);
        // if (staffInfo == 'error') {
        //   navigate('/signin')
        // }
      }
    //   window.decide = decide
      useEffect(() => {
        decide()
      }, [])
  return (
    <>
        <div className="SubjectSetting w-full ">
            <label htmlFor="subjectName">Change Subject</label>
            {/* <input type="text" className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' defaultValue='Mathematics' /> */}
            <select  name="staffIndex" id="staffIndex" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 px-6'>
                  {/* <option  value='0'>MATHEMATICS</option>
                  <option  value='1'>ENGLISH LANGUAGE</option>
                  <option  value='2'>YORUBA</option>
                  <option  value='3'>CIVIC EDUCATION</option>
                  <option  value='4'>COMPUTER STUDIES</option>
                  <option  value='5'>GEOGRAPHY</option>
                  <option  value='6'>ECONOMICS</option>
                  <option  value='7'>PHYSICS</option>
                  <option  value='8'>CHEMISTRY</option>
                  <option  value='9'>BIOLOGY</option>
                  <option  value='10'>ANIMAL HUSBANDRY</option>
                  <option  value='11'>FURTHER MATHEMATICS</option>
                  <option  value='12 '>TECHNICAL DRAWING</option>
                   */}
                   {subjects.map((subject, index) =>(
                        <option  value={index} selected={index==staffInfo.staffIndex?'true': 'false'}>{subject}</option>
                   ))}
                </select>
                {/* {setSubject} */}
            <label htmlFor="subjectTeacher">Change Subject Information</label>
            <input type="text" className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' defaultValue='' />
            <div className=' w-full md:w-3/6 aspect-square block mx-auto'>
                <object data="sound.p3" width="100%" height="100%" className=' rounded-lg my-2'>  
                    <div className=' bg-black flex w-full h-full items-center justify-center'>
                        <p className=' text-white'>The Choosed File Wil Appear Here</p>
                    </div>
                </object>
            </div>
            <label htmlFor="" className='w-full'>
                <span className="sr-only">Choose Fil To Upload</span>
                <input type="file" className=' w-full my-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100' />
            </label>
            <ButtonComp name='Update Subject Info'/>
        </div>
    </>
  )
}

export default SubjectSetting