import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='font-bold text-2xl'>LOGO</div>
      <ul className='md:flex hidden gap-5'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>CARRIER</li>
      </ul>
      <Sheet>
        <SheetTrigger className='md:hidden'>
            <Menu/>
        </SheetTrigger>

        <SheetContent>
                <SheetHeader>
                    <SheetTitle>MENU</SheetTitle>
                    <SheetDescription>Click outside to close</SheetDescription>
                </SheetHeader>
          <ul className='flex gap-5'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CARRIER</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Header
