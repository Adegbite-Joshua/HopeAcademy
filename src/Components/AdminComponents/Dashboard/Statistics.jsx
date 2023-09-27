import React from 'react'
import Stat from './Stat'

const Statistics = () => {
  return (
    <div className='flex flex-wrap flex-row gap-5 my-2 justify-center mx-auto'>
        <Stat/>
        <Stat/>
        <Stat/>
        <Stat/>
        <Stat/>
    </div>
  )
}

export default Statistics