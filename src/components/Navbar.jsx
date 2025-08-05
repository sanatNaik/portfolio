import React from 'react'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className='w-full flex h-[8%] sm:h-[10%] items-center fixed font-semibold text-xl md:justify-end px-14 md:gap-8 bg-[#2B2D42] text-white overflow-x-scroll xl:overflow-x-hidden gap-5'> 
      <Link to="homeId" smooth={true} duration={500} className='cursor-pointer hover:text-blue-600'>
        Home
      </Link>
      <Link to="aboutId" smooth={true} duration={500} className='cursor-pointer  hover:text-blue-600'>
        About
      </Link>
      <Link to="projectId" smooth={true} duration={500} className='cursor-pointer  hover:text-blue-600'>
        Projects
      </Link>
      <Link to="skillsId" smooth={true} duration={500} className='cursor-pointer  hover:text-blue-600'>
        Skills
      </Link>
      <Link to="resumeId" smooth={true} duration={500} className='cursor-pointer  hover:text-blue-600'>
        Resume
      </Link>
      <Link to="contactId" smooth={true} duration={500} className='cursor-pointer  hover:text-blue-600'>
        Contact
      </Link>
    </nav>
  )
    
    
}

export default Navbar
