import React from 'react'
import Stat from './Stat'

const Statistics = () => {
  return (
    <div className='flex flex-wrap flex-row gap-5 my-2 justify-center mx-auto'>
        <Stat name='Classes' amount='560' icon='fa-flag'/>
        <Stat name='Courses' amount='460' icon='fa-flag'/>
        <Stat name='Teachers' amount='360' icon='fa-flag'/>
        <Stat name='Students' amount='260' icon='fa-flag'/>
        {/* <Stat name='' amount='160' icon='fa-flag'/> */}
    </div>
  )
}

export default Statistics