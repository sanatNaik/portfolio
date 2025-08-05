import React from 'react'
import { Element } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

const LandingPage = () => {
  return (
    <Element name = "homeId">
      <div className='flex flex-col sm:flex-row justify-center overflow-y-auto w-full sm:pt-20 pt-40 pb-24 gap-20 bg-landing-gradient items-center sm:px-20 text-gray-900 font-medium' >
        <div className='flex flex-col sm:w-[60%] h-full p-5 gap-5 sm:gap-10 sm:pt-40 sm:pb-40'>
          <div className='flex flex-col gap-3'>
              <TypeAnimation
              sequence={[
                "Hi, I'm Sanat Naik", 2000,
              ]}
              wrapper="h1"
              className="text-5xl sm:text-6xl font-bold text-slate-900"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
            <div><h2 className='text-xl font-semibold sm:text-2xl'>AI & Web Development Enthusiast | B.Tech CSE @ NIT Goa</h2></div>
          </div>
          <div className='flex w-full text-xl'>
              Passionate about building intelligent systems and solving real-world problems with Artificial Intelligence and full-stack development.<br/>
              📍 Based in Goa, India<br/>
              🎯 Eager to explore AI research, product development, and internships.  
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src="portfolio_image.png" alt="" className='w-[200px] sm:w-[300px] rounded-[48%] border-b-4 border-blue-900'/>
        </div>
      </div>
    </Element>
    
  )
}

export default LandingPage
