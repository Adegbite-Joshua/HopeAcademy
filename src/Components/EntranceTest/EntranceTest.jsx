import React , {useEffect, useState} from 'react'
import axios from 'axios'
import LandingPageNav from "../LandingPageNav";
import Calculator from "./Calculator";
import TestWelcomeAndInput from './TestWelcomeAndInput';





const EntranceTest = () => {

    useEffect(()=>{
    }, [])
  return (
    <>
        <LandingPageNav/>
        {/* <Calculator/> */}
        <TestWelcomeAndInput/>
    </>
  )
}

export default EntranceTest;