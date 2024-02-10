import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import DisplayToast from '../DisplayToast';

const checkStudentFeeStatus = () => {
    const [paymentDisplayOption, setpaymentDisplayOption] = useState('indebt');
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let alreadyMadePartPayment = studentInfo?.currentSchoolFee;
    const navigate = useNavigate();


    useEffect(() => {
        if(Object.keys(studentInfo).length > 0 && studentInfo.constructor === Object && alreadyMadePartPayment?.fullPayment){
          setpaymentDisplayOption('full');
        } else if (Object.keys(studentInfo).length > 0 && studentInfo.constructor === Object && alreadyMadePartPayment?.partPayment) {
          setpaymentDisplayOption('half');
        } else if (Object.keys(studentInfo).length > 0 && studentInfo.constructor === Object && (studentInfo==undefined||null||{})) {
          setpaymentDisplayOption('indebt');
        }

    DisplayToast('success', 'School fees payment required');
    paymentDisplayOption == 'indebt' ? navigate('/student/feepayment') : '';

    }, [studentInfo])
    return [paymentDisplayOption];
}

export default checkStudentFeeStatus