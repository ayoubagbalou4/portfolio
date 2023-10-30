import React from 'react'
import "./App.css"
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Projects from './pages/projects/Projects'

const App = () => {
  return (
    <div>
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App