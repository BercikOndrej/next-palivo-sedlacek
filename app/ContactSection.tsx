import ConctactInfo from '@/components/contact/ConctactInfo'
import ContactForm from '@/components/contact/ContactForm'
import GoogleMap from '@/components/contact/GoogleMap'
import React from 'react'

const ContactSection = () => {
  return (
    <section className='w-full bg-bg-color p-8'>
      <div className='"w-full mx-auto max-w-6xl gap-8 flex flex-col'>
        <ConctactInfo />
        <GoogleMap />
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
