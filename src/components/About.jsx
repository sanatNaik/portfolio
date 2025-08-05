import React from 'react'
import { Element } from 'react-scroll'
const About = () => {
  return (
    <Element name="aboutId">
      <div className='h-[70%] w-full py-24 px-6 sm:p-24 items-center justify-center bg-white text-gray-800'>
        <div className='flex flex-col gap-6 pt-4 p-4'>
          <div className='text-4xl font-bold text-gray-800'>About Me</div>
          <div className='text-lg sm:text-lg'>
              I’m a Computer Science Engineering student at NIT Goa (Batch of 2027), with a CGPA of 9.68 and a strong academic foundation (95.8% in CBSE 12th).<br/> I am passionate about machine learning, neural networks, AI, LLMs and full-stack web development. I’ve completed internships, certifications, and personal projects that show both my technical curiosity and commitment to growth.
              <br/>I thrive on collaboration, time management, and problem-solving, and I’m always excited to contribute to diverse and impactful projects.
          </div>
        </div>
      </div>
    </Element>
    
  )
}

export default About
