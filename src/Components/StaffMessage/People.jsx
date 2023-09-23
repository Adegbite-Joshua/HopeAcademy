import React from 'react'

const People = ({name, setPartner, id, identity}) => {
  // console.log(name, index);
  return (
    <>
        <div onClick={()=>console.log(name, id)} className='w-full bg-white p-2 my-1 rounded-md'>
            <img src="vite.svg" className='h-12 w-12 float-left' alt="" />
            <p>{name}</p>
            <p className='text-right text-green-500'><small>{identity}</small></p>
        </div>
    </>
  )
}

export default People