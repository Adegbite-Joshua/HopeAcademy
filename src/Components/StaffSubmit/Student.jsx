import React from 'react'
import Icon from '../Icon'

const Student = ({name}) => {
  return (
    <>
        <div className=' bg-white my-1 rounded-md p-2'>
            <Icon/>
            <h3>{name}</h3>
            <p className='text-right'><small>Active</small></p>
        </div>
    </>
  )
}

export default Student