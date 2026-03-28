interface Props {
  onSelect?: () => void;
}

const NavMenu = ({ onSelect }: Props) => {
  const navItemStyle =
    "rounded-lg px-4 py-2 text-heading transition-colors duration-300 hover:cursor-pointer hover:bg-primary/20 hover:text-heading sm:text-inherit sm:hover:bg-primary/15";

  return (
    <nav role="navigation" className="w-full px-2 sm:px-4">
      <ul className="flex w-full flex-col justify-between gap-2 text-center sm:flex-row sm:items-center sm:gap-0">
        <a
          href="#section--about"
          className={`${navItemStyle}`}
          onClick={onSelect}
        >
          <li>O nás</li>
        </a>
        <a
          href="#section--price-list"
          className={`${navItemStyle}`}
          onClick={onSelect}
        >
          <li>Ceník</li>
        </a>
        <a
          href="#section--gallery"
          className={`${navItemStyle}`}
          onClick={onSelect}
        >
          <li>Galerie</li>
        </a>
        <a
          href="#section--contact"
          className={`${navItemStyle}`}
          onClick={onSelect}
        >
          <li>Kontakt</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavMenu;
