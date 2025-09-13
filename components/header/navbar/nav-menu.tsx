interface Props {
  onSelect?: () => void;
}

const NavMenu = ({onSelect}: Props) => {
  const navItemStyle = 'hover:cursor-pointer rounded-lg hover:bg-primary/30 hover:text-gray-900 px-4 py-2 transform duration-300 bg-primary/30 text-gray-900 sm:text-inherit sm:bg-inherit';

  return (
   <nav role='navigation' className='w-full px-4'>
          <ul className='flex flex-col sm:flex-row w-full text-center gap-2 sm:gap-0 justify-between'>
            <a  href="#section--about" className={`${navItemStyle}`} onClick={onSelect}>
              <li>O nás</li>
            </a>
            <a href="#section--price-list" className={`${navItemStyle}`} onClick={onSelect}>
              <li>Ceník</li>
            </a>
            <a href="#section--gallery" className={`${navItemStyle}`} onClick={onSelect}>
              <li>Galerie</li>
            </a>
            <a href="#section--contact" className={`${navItemStyle}`} onClick={onSelect}>
              <li>Kontakt</li>
            </a>
          </ul>
        </nav>
  )
}

export default NavMenu
