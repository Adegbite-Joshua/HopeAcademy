import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'


const checkStudentFeeStatus = () => {
    const [paymentDisplayOption, setpaymentDisplayOption] = useState('');
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    // studentInfo=={}:
    let alreadyMadePartPayment = studentInfo?.currentSchoolFee;

    useEffect(() => {
        if(Object.keys(studentInfo).length > 0 && studentInfo.constructor === Object && alreadyMadePartPayment?.fullPayment){
          setpaymentDisplayOption('full')
        } else if (Object.keys(studentInfo).length > 0 && studentInfo.constructor === Object && alreadyMadePartPayment?.partPayment) {
          setpaymentDisplayOption('half')
        } else if (Object.keys(studentInfo).length > 0 && studentInfo.constructor === Object && (studentInfo==undefined||null||{})) {
          setpaymentDisplayOption('indebt')
        }
      }, [studentInfo])
      console.log(paymentDisplayOption, studentInfo);
  return [paymentDisplayOption]
}

export default checkStudentFeeStatus