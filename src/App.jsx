// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./NavBar"
import NavBar from './NavBar'
// import "./respTab.css"
import { Routes , Route } from 'react-router-dom'
import "./respPhone.css"
import "./respLabtop.css"
// import "./respSmallPhone.css"
// import "./respLarge.css"
import About from './About'
// import Skills from './Skills'
import TechStack from './TechStack'
import AboutMe from './AboutMe'
import MyProjects from './MyProjects'
import ContactMe from './ContactMe'
function App() {
  // const myButton = document.getElementById("myBtn");
  // let scrolling = document.getElementById("skills").getBoundingClientRect().top;
  // window.addEventListener("scroll",()=>{
  //   if(window.scrollY > (scrolling)){
  //     myButton.style.opacity = 1;
  //     myButton.style.cursor = "pointer";
  //   }else{
  //     myButton.style.opacity = 0;
  //     myButton.style.cursor = "auto";
  //   };
  // });
  return (  
    <>
    {/* <div className='all' style={{height: "auto", width: "100%"}}> */}
      <div className='theNavBarFile' >
        <NavBar />
      </div>
      {/* <div className="theAboutFile"> */}
        <About />
      {/* </div> */}
      {/* <Skills /> */}
      <TechStack />
      {/* <AboutMe /> */}
      <MyProjects />
      <ContactMe />
      {/* <button  utton onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} id='myBtn' className='myBtn'>↑</button> */}
      
    {/* </div> */}
    </>
  )
}

export default App
