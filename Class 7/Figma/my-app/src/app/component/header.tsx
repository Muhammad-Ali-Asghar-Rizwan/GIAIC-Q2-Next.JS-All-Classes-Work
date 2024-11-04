import React from 'react'

const Header = () => {
  return (
    
      
        <div className='flex items-center px-12 h-14 bg-pink-500 text-white '>
        <div className='text-2xl font-bold font-serif'>Logo</div>
        <div className='flex justify-end gap-7 ml-auto' >
            <div className='cursor-pointer'>Home</div>
            <div className='cursor-pointer'>About</div>
            <div className='cursor-pointer'>Contact</div>
        </div>
        </div>
      
    
  )
}

export default Header
