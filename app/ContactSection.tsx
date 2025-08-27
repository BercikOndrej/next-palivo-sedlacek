import ConctactInfo from '@/components/contact/ConctactInfo'
import ContactForm from '@/components/contact/ContactForm'
import GoogleMap from '@/components/contact/GoogleMap'
import React from 'react'

const ContactSection = () => {
  return (
    <section className='w-full bg-bg-color py-8 p-4 md:p-8'>
      <div className='"w-full mx-auto max-w-6xl gap-8 grid grid-cols-1 md:grid-cols-2'>
        <ConctactInfo />
        <ContactForm />
        <GoogleMap />
      </div>
    </section>
  )
}

export default ContactSection
