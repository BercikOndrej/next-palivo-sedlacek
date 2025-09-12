'use client';

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { GiWoodenSign } from "react-icons/gi";
import NavMenu from "./nav-menu";
import { useState } from "react";

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden ml-auto p-2 hover:bg-primary/30 rounded-lg hover:cursor-pointer duration-300">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <GiWoodenSign size={32} />
        </DrawerTrigger>
        <DrawerContent className="items-center mb-4">
          <DrawerTitle className="m-4">Menu</DrawerTitle>
          <NavMenu onSelect={() => setIsOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default NavbarDrawer
