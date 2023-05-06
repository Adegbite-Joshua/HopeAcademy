import React from 'react'

const SocialMediaUpdate = () => {
  return (
    <>
         <div className='w-100 SocialMediaUpdate'>
          <h3 classname='p-3'>Add Your Social Media Link</h3>
          <div className='w-100 px-4'>
            <label htmlFor='emailaddress'>Email Address</label>
            <input type='link' className='p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500 w-full md:w-3/6 block' placeholder='Email Address' id='emailaddress' />
            <div className='block w-full md:w-3/6 ms-auto'>
                <label htmlFor='facebooklink'>Facebook Link</label>
                <input type='link' className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' placeholder='Facebook Link' id='facebooklink' />
            </div>
            <label htmlFor='whatsappNumber'>WhatsApp Number</label>
            <input type='tel' className='p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500 w-full md:w-3/6 block' placeholder='WhatsApp Number' id='whatsappNumber' />
            <div className='block w-full md:w-3/6 ms-auto'>
                <label htmlFor='otherLinks'>Other Links</label>
                <input type='link' className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' placeholder='Other Links' id='otherLinks' />
            </div>
          <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-2'>Submit</button>
          </div>
        </div>
    </>
   
  )
}

export default SocialMediaUpdate