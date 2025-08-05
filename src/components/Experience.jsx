import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col  w-full bg-[#e0f2fe] sm:p-20 py-20 px-10 justify-center gap-20'>
        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='text-4xl font-bold'>Experience</h1>
          </div>
          <div className='flex flex-col text-lg sm:text-lg font-semibold gap-4'>
            <div>
              <h2 className='text-2xl sm:text-2xl font-bold'>ML/AI Lead @ Coding Club NIT GOA</h2>
              July 2025 – present<br/>
            </div>
            <div>
              <h2 className='text-2xl sm:text-2xl font-bold'>AI Research Intern @ Planto.AI</h2>
              Feb 2025 – Apr 2025<br/>
              Conducted strategic research and built presentations on integrating AI into Indian startups.
            </div>
          </div>        
        </div>
        
    </div>
  )
}

export default Experience
