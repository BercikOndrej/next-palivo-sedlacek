
const Navbar = () => {
  const navItemStyle = 'hover:cursor-pointer rounded-lg hover:bg-primary/30 hover:text-gray-900 px-4 py-2 transform duration-300';

  return (
    <div className='h-12 bg-bg-color'>
      <div className='max-w-6xl mx-auto w-full p-4 flex gap-8'>
        <div className='w-1/3 p-2'>Budoucí logo</div>
        <nav role='navigation' className='w-2/3'>
          <ul className='flex w-full justify-center gap-12'>
            <li className={`${navItemStyle}`}>
              <a href="#section--about">O nás</a>
            </li>
            <li className={`${navItemStyle}`}>
              <a href="#section--price-list">Ceník</a>
            </li>
            <li className={`${navItemStyle}`}>
              <a href="#section--gallery">Galerie</a>
            </li>
            <li className={`${navItemStyle}`}>
              <a href="#section--contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
