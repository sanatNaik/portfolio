import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certification from './components/Certification'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Language from './components/Language'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <>
      <div className='h-screen w-full bg-bg-gradient'>
        <Navbar/>
        <LandingPage/>
        <About />
        <Projects/>
        <Skills/>
        <Education/>
        <Certification/>
        <Experience/>
        <Resume/>
        <Language/>
        <ContactMe/>
      </div>
    </>
  )
}

export default App
