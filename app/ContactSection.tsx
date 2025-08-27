import ConctactInfo from '@/components/contact/ConctactInfo'
import ContactForm from '@/components/contact/ContactForm'
import GoogleMap from '@/components/contact/GoogleMap'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const ContactSection = () => {
  return (
    <section className='w-full  bg-bg-color py-8 p-4 md:p-8'>
      <div className='"w-full mx-auto max-w-6xl'>
        <SectionTitle title='Kontakt'/>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
          <ConctactInfo />
          <ContactForm />
          <GoogleMap />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
