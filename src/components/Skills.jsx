import React from 'react'
import { Element } from 'react-scroll'
const Skills = () => {
  return (
    <Element name="skillsId">
      <div className='flex flex-col h-[80%] w-full bg-[#f8fafc] text-gray-800 sm:p-20 py-20 px-10 justify-center gap-5 pt-32'>
        <div className='text-4xl font-bold text-gray-800'>Skills</div>
        <div className=''>
          <h1 className='text-xl font-bold '>CS Fundamentals & Programming</h1>
          <p>Python • C++ • Java • SQL • DBMS • DSA • OOP</p>
          <br/>
            <h1 className='text-xl font-bold'>Web Development</h1>
            <p>HTML • CSS • JavaScript • React • TailwindCSS • Express</p>
            <br/>
            <h1 className='text-xl font-bold '>Machine Learning & Neural Networks</h1>
            <p>ML • Neural Networks • Numpy • Pandas • ScikitLearn • Tensorflow</p>
            <br/>
            <h1 className='text-xl font-bold '>AI & LLMs</h1>
            <p>LLM Engineering • Generative AI • Prompt Engineering • LoRA FineTuning • MultiAgent Systems • LangChain • RAG • Gradio</p>
            <br/>
            <h1 className='text-xl font-bold'>Databases</h1>
            <p>MongoDB • MySQL</p>
        </div>
      </div>
    </Element>
    
  )
}

export default Skills
