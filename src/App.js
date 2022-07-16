import React from 'react'
import Header from './Components/Header/Header'
import Topcontainer from './Components/Topcontainer/Topcontainer'
import Skillcontainer from './Components/Skillcontainer/Skillcontainer'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer'
import Contact from './Components/Contact/Contact'
import './App.css'
const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <Projectcontainer/>
      <Experiencecontainer/>
      <Contact/>
    </div>
  )
}

export default App