import './App.css'
import "./NavBar"
import NavBar from './NavBar'
import { Routes , Route } from 'react-router-dom'
import "./respPhone.css"
import "./respLabtop.css"
import About from './About'
import TechStack from './TechStack'
import AboutMe from './AboutMe'
import MyProjects from './MyProjects'
import ContactMe from './ContactMe'
function App() {
  return (  
    <>
      <div className='theNavBarFile' >
        <NavBar />
      </div>
        <About />
      <TechStack />
      <MyProjects />
      <ContactMe />
    </>
  )
}

export default App
