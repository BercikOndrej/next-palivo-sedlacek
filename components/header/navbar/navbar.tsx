import Image from "next/image";
import logoLandScape from '@/public/Logo landscape.png';
import NavMenu from "./nav-menu";
import NavbarDrawer from "./navbar-drawer";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {

  return (
    <div className='bg-bg-color p-4'>
      <div className='mx-auto flex w-full max-w-6xl items-center gap-4 sm:gap-6'>
        <div className='min-w-0 flex-1 sm:max-w-xs'>
          <Image src={logoLandScape} alt={"Logo společnosti"} height={60} />
        </div>
        <div className="hidden flex-1 sm:block">
          <NavMenu />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <NavbarDrawer />
        </div>
      </div>
    </div>
  )
}

export default Navbar
