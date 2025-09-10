import Image from 'next/image'
import introPhoto1 from '@/public/intro/Intro-photo-1.webp';
import introPhoto2 from '@/public/intro/Intro-photo-2.webp';
import logo from '@/public/Logo.webp';

const AboutImages = () => {
  return (
    <>
      <div className='lg:hidden w-full'>
        <Image src={logo} alt={'Logo společnosti'} className='mx-auto bg-primary/30 rounded-full' />
      </div>
      <div className='space-y-4 md:space-y-8 lg:w-1/3 hidden lg:block'>
        <div className='w-full group overflow-clip rounded-md'>
          <Image 
          src={introPhoto1}
          alt="Ukázkové foto"
          className="rounded-md object-cover group-hover:scale-110 transform duration-300" />
        </div>
        <div className='w-full group overflow-clip rounded-md'>
          <Image 
          src={introPhoto2}
          alt="Ukázkové foto"
          className="rounded-md object-cover group-hover:scale-110 transform duration-300" />
        </div>
      </div>
    </>
  )
}

export default AboutImages
