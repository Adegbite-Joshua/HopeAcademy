import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const StudentScoreTable = ({func, index,}) => {
    let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
    let classStudents = useSelector((state)=>state.staffInformation.classStudents)


    useEffect(() => {
        index&&subjectIndex?updateStudentAssessment():''
    }, [index])
    
    let subjectInd = index&&classStudents?classStudents[index].subjects.map((subject, index)=>{
        if (subject.subjectIndex==0) {
            // console.log(index);
            return index
        }
    }):''
    let subjectIndex = subjectInd[0]

    const [ca1,setca1] = useState('')
    const [ca2,setca2] = useState('')
    const [ca3,setca3] = useState('')
    const [ca4,setca4] = useState('')
    const [ca5,setca5] = useState('')
    const [ass1,setass1] = useState('')
    const [ass2,setass2] = useState('')
    const [ass3,setass3] = useState('')
    const [ass4,setass4] = useState('')
    const [ass5,setass5] = useState('')
    const [test1,settest1] = useState('')
    const [test2,settest2] = useState('')
    const [test3,settest3] = useState('')
    const [bonus1,setbonus1] = useState('')
    const [bonus2,setbonus2] = useState('')
    let percent = document.getElementById('total')/50*100
    let caRegex = /^[0-5]$/
    // console.log(caRegex.test(4));

    const updateStudentAssessment=()=>{
        // let ca1 = document.getElementById('ca1').value.trim()!=''?document.getElementById('ca1').value:00
        // let ca2 = document.getElementById('ca2').value.trim()!=''?document.getElementById('ca2').value:00
        // let ca3 = document.getElementById('ca3').value.trim()!=''?document.getElementById('ca3').value:00
        // let ca4 = document.getElementById('ca4').value.trim()!=''?document.getElementById('ca4').value:00
        // let ca5 = document.getElementById('ca5').value.trim()!=''?document.getElementById('ca5').value:00
        // let ass1 = document.getElementById('ass1').value.trim()!=''?document.getElementById('ass1').value:00
        // let ass2 = document.getElementById('ass2').value.trim()!=''?document.getElementById('ass2').value:00
        // let ass3 = document.getElementById('ass3').value.trim()!=''?document.getElementById('ass3').value:00
        // let ass4 = document.getElementById('ass4').value.trim()!=''?document.getElementById('ass4').value:00
        // let ass5 = document.getElementById('ass5').value.trim()!=''?document.getElementById('ass5').value:00
        // let test1 = document.getElementById('test1').value.trim()!=''?document.getElementById('test1').value:00
        // let test2 = document.getElementById('test2').value.trim()!=''?document.getElementById('test2').value:00
        // let test3 = document.getElementById('test3').value.trim()!=''?document.getElementById('test3').value:00
        // let bonus1 = document.getElementById('bonus1').value.trim()!=''?document.getElementById('bonus1').value:00
        // let bonus2 = document.getElementById('bonus2').value.trim()!=''?document.getElementById('bonus2').value:00
        let newAssessment = {
            ca1 : document.getElementById('ca1').value,
            ca2 : document.getElementById('ca2').value,
            ca3 : document.getElementById('ca3').value,
            ca4 : document.getElementById('ca4').value,
            ca5 : document.getElementById('ca5').value,
            ass1 : document.getElementById('ass1').value,
            ass2 : document.getElementById('ass2').value,
            ass3 : document.getElementById('ass3').value,
            ass4 : document.getElementById('ass4').value,
            ass5 : document.getElementById('ass5').value,
            test1 : document.getElementById('test1').value,
            test2 : document.getElementById('test2').value,
            test3 : document.getElementById('test3').value,
            bonus1 : document.getElementById('bonus1').value,
            bonus2 : document.getElementById('bonus2').value,
            total: Number(ca1)+Number(ca2)+Number(ca3)+Number(ca4)+Number(ca5)+Number(ass1)+Number(ass2)+Number(ass3)+Number(ass4)+Number(ass5)+Number(test1)+Number(test2)+Number(test3)+Number(bonus1)+Number(bonus2)
            // percent: 
        }
        func(newAssessment)
        // alert('yes')
    }
    const showTable =()=>{
        return (<>
            <tr>    {console.log(classStudents[index].subjects[subjectIndex])}
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ca1} id='ca1' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' name="" onChange={(e)=>{
                    setca1(e.target.value)
                    updateStudentAssessment()
                    }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ca2} id='ca2' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setca2(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ca3} id='ca3' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setca3(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ca4} id='ca4' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setca4(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ca5} id='ca5' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setca5(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ass1} id='ass1' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setass1(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ass2} id='ass2' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setass2(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ass3} id='ass3' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setass3(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ass4} id='ass4' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setass4(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].ass5} id='ass5' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setass5(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].test1} id='test1' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    settest1(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].test2} id='test2' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    settest2(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].test3} id='test3' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    settest3(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].bonus1} id='bonus1' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setbonus1(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={classStudents[index].subjects[subjectIndex].bonus2} id='bonus2' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>{
                    setbonus2(e.target.value)
                    updateStudentAssessment()
                }} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].total:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" value={Number(ca1)+Number(ca2)+Number(ca3)+Number(ca4)+Number(ca5)+Number(ass1)+Number(ass2)+Number(ass3)+Number(ass4)+Number(ass5)+Number(test1)+Number(test2)+Number(test3)+Number(bonus1)+Number(bonus2)} id='total' /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].percent:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" value={percent} /></td>
                <td className=' h-11 w-11 text-center m-1 border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].position:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" onChange={(e)=>setposition(e.target.value)} /></td>
            </tr>
        </>)
    }
  return (
    <>
        <table className=' w-full'>
            <thead className=' w-full'>
                <tr className=' w-full'>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TEST</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TEST</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TEST</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>BONUS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>BONUS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TOTAL</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>PERCENT</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>POSITION</td>
                </tr>
            </thead>
            <tbody id='result'>
            {subjectIndex!='' && <tr className='w-full'><td colSpan={15}>Select A Student</td></tr>}
            {subjectIndex==''?showTable():''}
        </tbody>
        </table>
    </>
  )
}

export default StudentScoreTable