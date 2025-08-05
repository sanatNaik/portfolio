import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='flex flex-col min-h-[340px] min-w-[240px] w-[20%] bg-blue-200 border-2 border-black p-4 rounded-lg gap-4 justify-between text-gray-800'>
        <div className='flex flex-col gap-4'>
            <div className='text-xl font-bold text-center'>{props.projName}</div>
            <div className='text-l'>{props.description}</div>
            <div className='text-l font-semibold'>{props.techstack}</div>
        </div>
        <div className='flex h-[15%] w-full gap-4 justify-center items-end'>
            <a href={props.giturl} target="_blank" className='flex min-h-[35px] h-[70%] w-[45%] bg-white rounded-lg items-center justify-center text-lg font-semibold'>GitHub</a>
            {/* <a src={props.vidFileName} className='flex h-[90%] w-[45%] bg-gray-300 px-4 rounded-lg items-center justify-center text-lg font-semibold'>Demo</a> */}
        </div>
    </div>
  )
}

export default ProjectCard
