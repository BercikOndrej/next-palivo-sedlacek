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
    <div className="rounded-lg p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-primary/20 sm:hidden">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <GiWoodenSign size={32} />
        </DrawerTrigger>
        <DrawerContent className="mb-4 items-center bg-popover">
          <DrawerTitle className="m-4">Menu</DrawerTitle>
          <NavMenu onSelect={() => setIsOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default NavbarDrawer
