import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Result from './Result'
import { renderToStaticMarkup } from 'react-dom/server';
import { PDFViewer } from '@react-pdf-viewer/react-to-pdf';
import jsPDF from 'jspdf';

const ResultsMainDiv = ({resultshhh}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [staffInfo, setstaffInfo] = useState(useSelector((state)=>state.staffInformation.staffInformation))
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  
  const school = {
    logoUrl: '/vite.svg',
    name: 'Example School',
    address: '123 School Street, Cityville, State, 12345',
    contactNumber: '123-456-7890',
  };

  const student = {
    name: 'John Doe',
    rollNumber: '12345',
    className: 'Class 10',
  };

  const results = [
    { term: '2023CjssoneT1', ca: 24, exam: 67 },
    { term: '2023CjssoneT2', ca: 22, exam: 50 },
  ];

  const generatePdf = () => {
  const pdf = new jsPDF();
  const pdfContent = renderToStaticMarkup(<StudentInfoTable /* Pass your props here */ />);
  pdf.fromHTML(pdfContent, 15, 15);
  pdf.save('student_info.pdf');
};
  return (
    <>
        <div className='DashboardMainDiv order-5 md:order-none mt-16 md:mt-0 h-screen basis-full md:basis-7/12 p-5 overflow-y-auto'>
            <Result results={results} studentName={student.name} rollNumber={student.rollNumber} className={student.className} schoolName={school.name} address={school.address} contactNumber={school.contactNumber} logoUrl={school.logoUrl}/>
            {/* {results?.length> 0? results.map((notification)=>(
                // <Notification id={notification.senderId} name={notification.name} message={notification.message} type={notification.type || 'submit'}/>
            )): <Notification name='Empty Notification' message='You do not have any notification at the moment' type='empty'/>} */}
        </div>
    </>
  )
}

export default ResultsMainDiv