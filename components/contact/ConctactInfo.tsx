import React from 'react'
import { LuMapPinHouse } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

const commonStyle = 'group text-black w-max flex gap-8 items-center hover:text-primary hover:gap-12 duration-300 transform';
const iconStyle = 'group-hover:scale-110 duration-300 transform w-8 h-8 md:w-12 md:h-12'
const textStyle = 'text-l md:text-xl font-semibold group-hover:text-primary duration-300 transform';

const ConctactInfo = () => {
  return (
    <div className='flex flex-col justify-between gap-8'>
      <div>
        Potřebujete pomoci s výběrem, nebo se zeptat na naší aktuální nabídku? Zavolejte nám nebo nás kontaktujte pomocí formuláře, rádi Vám poradíme a zodpovíme Vaše dotazy.
      </div>
      
      <div className='space-y-8'>
        <div className={commonStyle}>
            <LuClock3 className={iconStyle} />
            <span className={textStyle}>Po - Pá: 7:00 - 11:00</span>
        </div> 
        <a
        href='https://www.google.com/maps/place/Palivo+Sedl%C3%A1%C4%8Dek+s.r.o./@49.2931742,17.4107919,17z/data=!3m1!4b1!4m6!3m5!1s0x4713073969cb37f9:0x34b81dad4e7f5d40!8m2!3d49.2931742!4d17.4133668!16s%2Fg%2F11tmn96flh?entry=ttu'
        target='_blank' 
        className={commonStyle + 'hover:cursor-pointer'}>
            <LuMapPinHouse className={iconStyle} />
            <span className={textStyle}>Na Hrázi, 767 01 Kroměříž 1</span>
        </a>
        <a
        href='mailto:palivosedlacek@gmail.com'
        className={commonStyle + 'hover:cursor-pointer'}>
            <LuMail className={iconStyle} />
            <span className={textStyle}>palivosedlacek@gmail.com</span>
        </a>
        <a
        href='tel:+420606740783'
        className={commonStyle + 'hover:cursor-pointer'}>
            <LuPhone className={iconStyle} />
            <span className={textStyle}>+420 606 740 783</span>
        </a>
      </div>
    </div>
  )
}

export default ConctactInfo
