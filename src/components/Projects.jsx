import React from 'react'
import ProjectCard from './ProjectCard'
import { Element } from 'react-scroll'

const Projects = () => {
  return (
    <Element name="projectId">
      <div className='flex flex-col h-[80%] w-full bg-[#edf2f7] text-black py-24 px-6 sm:p-24 justify-center '>
        <div className='text-4xl font-bold px-4 pt-4'>Projects</div>
        <div className='flex flex-row pt-7 gap-10 justify-between overflow-x-scroll'>
            <ProjectCard
              projName="LegalMind – RAG based AI Chatbot"
              description="Developed a legal AI chatbot that answers queries based on Indian law using Retrieval-Augmented Generation (RAG)."
              techstack="ChromaDB, Sentence Transformers, OpenRouter API, Langchain, Gradio, Python"
              giturl="https://github.com/sanatNaik/project-legal_ai.git"
            />
            <ProjectCard
              projName="SumItUp – AI Summarization Tool"
              description="Built an AI-powered text summarizer that condenses long content into key points."
              techstack="Gemini API, React, Tailwind, Flask"
              giturl = "https://github.com/sanatNaik/project-ai_summariser.git"
            />
            <ProjectCard
              projName="Cat vs Dog CNN Classifier"
              description="A deep learning-based binary classifier to distinguish cats and dogs."
              techstack="TensorFlow, Python, CNN, Flask, HTML, CSS, JS"
              giturl = "https://github.com/sanatNaik/project-catvdog_cnnClassifier.git"
            />
            <ProjectCard
              projName="Money Manager"
              description="A full-stack web app for managing personal finances, with session-based login, accounts, and analytics"
              techstack="HTML, CSS, JS, Express, MySQL"
              giturl = "https://github.com/sanatNaik/project-money_manager.git"
            />
            <ProjectCard
              projName="Mileage Prediction (ML)"
              description="Linear regression-based project for predicting vehicle mileage using supervised ML"
              techstack="Python, Pandas, Scikit-Learn"
              giturl = "https://github.com/sanatNaik/project-mileage_predictor.git"
            />
        </div>
      </div>
    </Element>
    
  )
}

export default Projects
