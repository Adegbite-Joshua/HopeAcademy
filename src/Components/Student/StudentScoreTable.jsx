import React from 'react'
import { useSelector } from 'react-redux'

const StudentScoreTable = ({index}) => {
    let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
    let classStudents = useSelector((state)=>state.staffInformation.classStudents)
    let subjectIndex = index&&classStudents?classStudents[index].subjects.findIndex({'subject.subject': staffInfo.class}):''
    const updateStudentAssessment =()=>{
        
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
            <tr>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ca1:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ca2:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ca3:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ca4:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ca5:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ass1:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ass2:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ass3:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ass4:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].ass5:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].test1:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].test1:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].test1:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].bonus1:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].bonus2:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].total:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].percent:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' defaultValue={subjectIndex?classStudents[index].subjects[subjectIndex].position:'00'} className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default StudentScoreTable