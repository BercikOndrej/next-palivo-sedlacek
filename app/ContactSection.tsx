import ConctactInfo from '@/components/ConctactInfo'
import GoogleMap from '@/components/GoogleMap'
import React from 'react'

const ContactSection = () => {
  return (
    <section className='w-full bg-bg-color p-8'>
      <div className='"w-full mx-auto max-w-6xl gap-8 flex flex-col'>
        <ConctactInfo />
        <GoogleMap />
      </div>
    </section>
  )
}

export default ContactSection
