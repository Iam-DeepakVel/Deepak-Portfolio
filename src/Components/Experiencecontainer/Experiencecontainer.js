import React from 'react'
import { Element } from 'react-scroll/modules'
import Experiencebox from '../Experiencebox/Experiencebox'
import "./Experiencecontainer.css"
const Experiencecontainer = () => {
  return (
    <Element id='exp' className="experiencecontainer">
     <h1>EXPERIENCE</h1>
     <div className='experiencecontainer__info'>
         <Experiencebox number="10+" title="clients"/>
         <Experiencebox number="15+" title="Projects" style={{backgroundColor:"orangered"}}/>
         <Experiencebox number="2+" title="Years Experience"/>
         <Experiencebox number="3+" title="Internships"/>
     </div>
    </Element>
  )
}

export default Experiencecontainer
