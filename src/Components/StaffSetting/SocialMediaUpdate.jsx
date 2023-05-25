import React from 'react'
import { useSelector } from 'react-redux'

const SocialMediaUpdate = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  return (
    <>
         <div className='w-100 SocialMediaUpdate'>
          <h3 classname='p-3'>Add Your Social Media Link</h3>
          <div className='w-100 px-4'>
            <label htmlFor='emailaddress'>Twitter Address</label>
            <input type='link' defaultValue={staffInfo.links.twitter?staffInfo.links.twitter:''} className='p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500 w-full md:w-3/6 block' placeholder='Twitter Address' id='twitteraddress' />
            <div className='block w-full md:w-3/6 ms-auto'>
                <label htmlFor='facebooklink'>Facebook Link</label>
                <input type='link' defaultValue={staffInfo.links.facebook?staffInfo.links.facebook:''} className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' placeholder='Facebook Link' id='facebooklink' />
            </div>
            <label htmlFor='whatsappNumber'>WhatsApp Link</label>
            <input type='tel' defaultValue={staffInfo.links.whatsapp?staffInfo.links.whatsapp:''} className='p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500 w-full md:w-3/6 block' placeholder='WhatsApp Link' id='whatsapplink' />
            <div className='block w-full md:w-3/6 ms-auto'>
                <label htmlFor='otherLinks'>Other Link</label>
                <input type='link' defaultValue={staffInfo.links.other?staffInfo.links.other:''} className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' placeholder='Other Link' id='otherlink' />
            </div>
          <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-2'>Submit</button>
          </div>
        </div>
    </>
   
  )
}

export default SocialMediaUpdate