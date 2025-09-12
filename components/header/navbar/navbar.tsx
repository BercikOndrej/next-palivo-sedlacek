import Image from "next/image";
import logoLandScape from '@/public/Logo landscape.png';
import NavMenu from "./nav-menu";
import NavbarDrawer from "./navbar-drawer";

const Navbar = () => {

  return (
    <div className='bg-bg-color p-4'>
      <div className='max-w-6xl mx-auto w-full flex items-center gap-8'>
        <div className='w-1/3'>
          <Image src={logoLandScape} alt={"Logo společnosti"} height={60} />
        </div>
        <div className="hidden sm:block w-2/3">
          <NavMenu />
        </div>
        <NavbarDrawer />
      </div>
    </div>
  )
}

export default Navbar
