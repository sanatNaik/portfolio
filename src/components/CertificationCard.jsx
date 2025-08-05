import React from 'react'

const CertificationCard = (props) => {
  return (
    <div className='flex flex-col min-h-[220px] w-[22%] min-w-[220px] bg-blue-100 text-gray-900 border-2 border-black p-4 rounded-lg justify-around gap-2'>
        <div className='flex flex-col gap-1 text-center'>
            <div className='text-lg font-bold text-center'>{props.certName}</div>
            <div className='text-l font-semibold'>{props.certDesc}</div>
        </div>
        <div className='flex flex-col gap-1 text-center'> 
            <div className='text-l font-semibold'>{props.certIssDate}</div>
            <div className='text-l font-semibold'>Credential ID: {props.certCred}</div>
        </div>
    </div>
  )
}

export default CertificationCard
