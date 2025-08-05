import React from 'react'
import CertificationCard from './CertificationCard'

const Certification = () => {
  return (
    <div className='flex flex-col h-[80%] w-full bg-[#f1f5f9] py-24 px-6 sm:p-24 justify-center text-gray-900'>
        <div className='text-4xl px-4 font-bold'>Certificates</div>
        <div className='flex flex-row pt-7 gap-10 justify-between overflow-x-scroll xl:overflow-x-hidden'>
            <CertificationCard
              certName="LLM Engineering: Master AI, Large Language Models & Agents"
              certDesc = "Udemy"
              certIssDate = "Issued July 2025"
              certCred = "UC-b67d52e9-b28b-4c23b5f8-d44ba92275de"
            />
            <CertificationCard
              certName="Python for Data Science and Machine Learning Bootcamp"
              certDesc = "Udemy"
              certIssDate = "Issued Dec 2024"
              certCred = "UC-3af06ed3-1b58-4f2f-9067c1c422318841"
            />
            <CertificationCard
              certName="Data Science and Machine Learning Internship"
              certDesc = "YBI Foundation"
              certIssDate = "Issued - July 2024"
              certCred = "Q106RXJWGAI5X"
            />
            <CertificationCard
              certName="Supervised Machine Learning: Regression and Classification"
              certDesc = "DeepLearning.AI, Stanford University, Coursera"
              certIssDate = "Issued - May 2024"
              certCred = "WWABTKWK7387"
            />  
        </div>
    </div>
  )
}

export default Certification
