interface Props {
  onSelect?: () => void;
}

const NavMenu = ({onSelect}: Props) => {
  const navItemStyle = 'hover:cursor-pointer rounded-lg hover:bg-primary/30 hover:text-gray-900 px-4 py-2 transform duration-300 bg-primary/30 sm:bg-inherit';

  return (
   <nav role='navigation' className='w-full px-4'>
          <ul className='flex flex-col sm:flex-row w-full text-center gap-2 sm:gap-0 justify-between'>
            <li className={`${navItemStyle}`} onClick={onSelect}>
              <a href="#section--about">O nás</a>
            </li>
            <li className={`${navItemStyle}`} onClick={onSelect}>
              <a href="#section--price-list">Ceník</a>
            </li>
            <li className={`${navItemStyle}`} onClick={onSelect}>
              <a href="#section--gallery">Galerie</a>
            </li>
            <li className={`${navItemStyle}`} onClick={onSelect}>
              <a href="#section--contact">Kontakt</a>
            </li>
          </ul>
        </nav>
  )
}

export default NavMenu
