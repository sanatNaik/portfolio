import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col h-[70%] w-full bg-white text-gray-800 sm:p-20 px-10 justify-center gap-5 '>
        <div>
            <h1 className='text-4xl font-bold'>Education</h1>
        </div>
        <div className='text-lg sm:text-md'>
            <h2 className='text-2xl font-bold'>B.Tech in Computer Science Engineering</h2>
            National Institute of Technology, Goa (2023–2027)<br/>
            CGPA: 9.68<br/>
            JEE Mains Percentile: 98.49 (AIR 17553)<br/>
        </div>
        <div className='text-lg sm:text-md'>
            <h2 className='text-2xl font-bold'>12th CBSE Science</h2>
            Kendriya Vidyalaya 1, Vasco – 95.8%<br/>
            School Topper, Top 1.5% All India<br/>
        </div>
    </div>
  )
}

export default Education
