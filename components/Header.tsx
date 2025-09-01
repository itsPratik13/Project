import React from 'react'
import Navbutton from './Navbutton'
import { HomeIcon,File,UserRound, FileIcon } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <header className='top-2 z-20 sticky w-full max-w-screen shadow-sm dark:shadow-white/20'>
      <div className='flex h-10 items-center justify-between'>

        <div className='flex items-center gap-5 mt-1 mb-1'>
          <Navbutton href='/home' label='home' icon={HomeIcon}/>
         <Link href='/home' className='flex justify-center items-center gap-2 text-xl font-serif font-bold'><p>Computer Repair Shop</p></Link>

        </div>
        <div className='flex justify-between items-center gap-3 mt-1 mb-1'>
        <Navbutton href='/tickets' label='home' icon={File}/>
        <Navbutton href='/customers' label='Customer' icon={UserRound}/>
        <ModeToggle/>

          
        </div>

      </div>
      
    </header>
  )
}

export default Header