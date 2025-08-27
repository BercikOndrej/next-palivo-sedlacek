import React from 'react'

const SectionTitle = ({title}: {title: string}) => {
  return (
    <h2 className= {
      'mb-8 text-black text-2xl md:text-3xl relative font-bold' + ' ' + 'before:content[""] before:z-10 before:absolute before:block before:-inset-1 before:bg-primary/30 before:rounded-full before:w-8 before:h-8 before:md:w-12 before:md:h-12 before:-left-2 before:md:-left-4 before:md:-top-2 before:transform before:duration-300'}>
      {title}
    </h2>
  )
}

export default SectionTitle
