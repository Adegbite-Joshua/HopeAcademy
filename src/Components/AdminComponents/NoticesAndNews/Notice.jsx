import React from 'react'
import axios from 'axios';
import DisplayToast from '../../../CustomHooks/DisplayToast';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllCourses, setFetchingState } from '../../../redux/adminInformation';



const Notice = ({subjectName, teacherName, email, subjectImage, id, courseClass, allCourses }) => {
  const dispatch = useDispatch();
  
  const deleteNotice = async()=>{
    let endpoint = 'http://localhost:7777/admin/delete_notice'
    let deleted = await axios.post(endpoint, {courseId:id, class: courseClass})
    if (deleted.status==200) {
      let [show] = DisplayToast('success', 'Course Deleted Successfully')
      const remainingCourses = allCourses[courseClass].courses.filter((course)=>course._id != id);
      dispatch(updateAllCourses({index: courseClass, newData: remainingCourses}))

    } else {
      let [show] = DisplayToast('error', 'An Error Occur, Please Try Again')
    }
  }

  return (
    <div className='w-full border-2 my-2'>
        <div className='p-5 bg-slate-300 shadow-lg'>
            <h3>Notice Head</h3>
        </div>
        <p className='p-1'>lorem10 knierui e roui  uw   ejuw    iwiuheihuh   h hjh hk hfh jhsd g hdsujh yu ymsdn a;ILSYSUHJS  HJH JHJK y lorem10 knierui e roui  uw   ejuw    iwiuheihuh   h hjh hk hfh jhsd g hdsujh yu ymsdn a;ILSYSUHJS  HJH JHJK y lorem10 knierui e roui  uw   ejuw    iwiuheihuh   h hjh hk hfh jhsd g hdsujh yu ymsdn a;ILSYSUHJS  HJH JHJK y</p>
        <div className='flex gap-2 p-1 justify-end'>
            <button><i className='bg-green-400 p-2 rounded-md fa fa-edit'></i></button>
            <button><i className='bg-red-400 p-2 rounded-md fa fa-trash'></i></button>
        </div>
    </div>
  )
}

export default Notice