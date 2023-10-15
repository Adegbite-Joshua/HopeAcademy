import React from 'react'
import ContactUsBox from './ContactUsBox'
import ContactUsMap from './ContactUsMap'

const ContactUsBoxAndMap = () => {
  return (
    <>
        <div className='ContactUsBoxAndMap w-100 p-5'>
            <ContactUsMap/>
            <ContactUsBox/>
        </div>
    </>
  )
}

export default ContactUsBoxAndMap