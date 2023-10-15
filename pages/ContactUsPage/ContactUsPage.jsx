import React from 'react'
import ContactUsBoxAndMap from '../../src/Components/ContactUsPage/contactUsBoxAndMap'
import ContactUsMainDiv from '../../src/Components/ContactUsPage/ContactUsMainDiv'
import LandingPageNav from '../../src/Components/LandingPageNav'
import LandingPageFooter from '../../src/Components/LandingPages/Footer'




const ContactUsPage = () => {
    
  return (
    <>
        <LandingPageNav/>
        <ContactUsMainDiv/>
        <ContactUsBoxAndMap/>
        <LandingPageFooter/>

    </>
  )
}

export default ContactUsPage