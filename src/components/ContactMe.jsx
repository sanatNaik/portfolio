import React from 'react'
import { Element } from 'react-scroll'

const ContactMe = () => {
  return (
    <Element name="contactId">
      <div className='flex flex-col h-[40%] w-full bg-contact-gradient p-20 px-10 sm:px-20 justify-center gap-5'>
        <div>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
        </div>
        <div className='flex flex-col text-lg font-semibold gap-4'>
            <h2>📍Goa, India</h2>
            <h2>📧 sanatnaik2005@gmail.com</h2>
            <div className='flex gap-4 '>
              <button className='flex items-center justify-between px-4 py-2 bg-blue-300 w-[120px] h-[40px] rounded-md'><a href="https://github.com/sanatNaik" target='blank'>GitHub</a> <img src="github-logo.png" alt="" className='w-[20px] h-[20px]'/></button>
              <button className='flex items-center justify-between px-4 py-2 bg-blue-300 w-[140px] h-[40px] rounded-md'><a href="https://www.linkedin.com/in/sanat-naik-4a156427b" target='blank'>LinkedIn</a><img src="linkedin.png" alt="" className='w-[20px] h-[20px]'/></button>
           </div>
        </div>
    </div>
    </Element>
    
  )
}

export default ContactMe
