import React from 'react'

const Language = () => {
  return (
    <div className='flex flex-col h-[40%] w-full bg-[#f9fafb] p-20 sm:px-20 px-10  justify-center gap-5'>
        <div>
            <h1 className='text-4xl font-bold'>Languages</h1>
        </div>
        <div className='text-lg font-semibold'>
            <ul>
                <li>• English</li>
                <li>• Hindi</li>
                <li>• Konkani</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Language
