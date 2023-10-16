import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import NavBar from '../../src/Components/StudentComponents/NavBar'
import fetchStudentInfo from '../../CustomHooks/fetchStudentInfo';
import checkStudentFeeStatus from "../../CustomHooks/checkStudentFeeStatus";


const SchoolFeePayment = () => {
    let studentInfo = useSelector((state) => state.studentInformation.studentInformation);
    const [paymentType, setPaymentType] = useState("");
    const [paymentAmount, setPaymentAmount] = useState(0);
    let fetching = useSelector((state) => state.studentInformation.studentFetchingState);
    const [paymentDisplayOption] = checkStudentFeeStatus();

    let [name] = fetchStudentInfo();
    let fullAmount = 50000;
    const handlePaymentTypeChange = (type) => {
        setPaymentType(type);
        setPaymentAmount(type === "full" ? fullAmount : fullAmount / 2);
    };

    const initializePayment = async () => {
        var handler = PaystackPop.setup({
            key: 'pk_test_020bedb6004bb3a95bb5589b33405add7e4e79a2', // Replace with your public key
            email: studentInfo.email,
            amount: paymentAmount * 100,
            currency: 'NGN',
            ref: 'PROADE' + Math.floor(Math.random() * 1000000000 + 1),
            callback: function (response) {
                var reference = response.reference;
                console.log({
                    type: paymentType,
                    amount: paymentAmount,
                    ref: reference,
                    studentClass: studentInfo.class,
                    email: studentInfo.email
                });
                axios.post('http://localhost:7777/student/fee_payment', {
                    type: paymentType,
                    amount: paymentAmount,
                    ref: reference,
                    studentClass: studentInfo.class,
                    email: studentInfo.email
                })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            onClose: function () {
                alert('Transaction was not completed, window closed.');
            },
        });
        handler.openIframe();
    };


    return (
        <>
            <div className="flex allWrap">
                <NavBar />
                {paymentDisplayOption !== 'full' && (
                    <div className="container mt-5 mx-auto">
                        <div className="w-96 mx-auto bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-center mb-4">School Fees Payment</h2>
                            <div className="mb-4">
                                <label className="font-bold block">Payment Instructions:</label>
                                <p className="text-sm">
                                    1. Select your payment type (Full or Half Payment).
                                    <br />
                                    2. Click the "Pay Now" button to proceed with the payment through Paystack.
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold block">Select Payment Option:</label>
                                {paymentDisplayOption === 'indebt' && (
                                    <div className="flex justify-center space-x-2">
                                        <button
                                            className={`btn ${paymentType === 'full' ? 'bg-primary' : 'bg-gray-300'} text-white`}
                                            onClick={() => handlePaymentTypeChange('full')}
                                        >
                                            Full Payment
                                        </button>
                                        <button
                                            className={`btn ${paymentType === 'half' ? 'bg-success' : 'bg-gray-300'} text-white`}
                                            onClick={() => handlePaymentTypeChange('half')}
                                        >
                                            Half Payment
                                        </button>
                                    </div>
                                )}
                                {paymentDisplayOption === 'half' && (
                                    <button
                                        className="block btn bg-primary text-white mt-2"
                                        onClick={() => handlePaymentTypeChange('otherhalf')}
                                    >
                                        Second Part Payment
                                    </button>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="font-bold block">Payment Amount:</label>
                                <input
                                    type="number"
                                    value={paymentAmount}
                                    readOnly
                                    className="form-control"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    className={`btn ${paymentType === '' ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white'}`}
                                    onClick={initializePayment}
                                    disabled={paymentType === ''}
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {paymentDisplayOption === 'full' && (
                    <div className="container mt-5 mx-auto flex justify-center items-center h-screen">
                        <div className="text-center">
                            <i style={{ fontSize: '80px' }} className="fas fa-check-circle text-success"></i>
                            <h2 className="text-2xl font-bold text-success mt-4">Payment Completed</h2>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SchoolFeePayment;
