import Image from 'next/image'
import logo from '@/public/Logo.webp';

const HeaderIntro = () => {
  return (
    <div className='w-full overflow-clip py-8 p-4 md:p-8 lg:pb-0'>
      <div className='mx-auto max-w-6xl flex'>
          <div className='w-full lg:mt-8'>
            <div>Regionální firma</div>
            <h1 className='font-bold text-4xl md:text-6xl text-black'>Palivo Sedláček</h1>
            <div className=''>
              <div className='text-primary font-bold text-xl md:text-3xl'>Výroba a prodej suchého</div>
              <div className='text-primary font-bold text-xl md:text-3xl'>kvalitního palivového dříví</div>
            </div>
          </div>
          <div className='hidden lg:block w-1/2 relative before:content-[""] before:bg-primary/30 before:w-[1500px] before:h-[1100px] before:-top-96 before:-left-20 before:absolute before:rounded-full before:block before:-z-10'>
            <Image className='ml-auto z-10' src={logo} alt={'Logo spolešnosti'} /> 
          </div>
      </div>
    </div>
  )
}

export default HeaderIntro
