import React from 'react'
import { Element } from 'react-scroll'
const Resume = () => {
  return (
    <Element name="resumeId">
      <div className='flex flex-col h-[40%] w-full bg-white py-20 px-10 sm:px-20 justify-center gap-10'>
        <div>
            <h1 className='text-4xl font-bold'>Resume</h1>
        </div>
        <div className='flex text-lg font-semibold items-center justify-center'>
          <a 
            href="/Resume.pdf" 
            download 
             className="inline-flex items-center gap-2 px-4 py-4 bg-blue-300 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
          Download Resume
          <img src="/download_icon.png" alt="Download" className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </Element>    
  )
}

export default Resume
