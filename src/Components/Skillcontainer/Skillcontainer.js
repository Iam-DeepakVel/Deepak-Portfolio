import React from 'react'
import {Element} from 'react-scroll/modules'
import './Skillcontainer.css'
import Skillimage from './Skillcontainer__image.jpg'
import LinearProgress from "@material-ui/core/LinearProgress"

const Skillcontainer = () => {
  return (
    <Element name='Skills' className='Skillcontainer'>
       <div className='Skillcontainer__image'>
       <img src={Skillimage} alt='Skillimage'/>
       </div>
       <div className='Skillcontainer__text'>
       <h2>SKILL SET</h2>
       <div className='Skillcontainer__skillset'>
           <h5>C</h5>
           <div className='Skillcontainer__slider Skillcontainer__slider1'>
               <LinearProgress variant="determinate" value={75}/>
           </div>
       </div>
       
       <div className='Skillcontainer__skillset'>
           <h5>C++</h5>
           <div className='Skillcontainer__slider Skillcontainer__slider2'>
               <LinearProgress variant="determinate" value={80}/>
           </div>
       </div>
       
       <div className='Skillcontainer__skillset'>
           <h5>HTML/CSS</h5>
           <div className='Skillcontainer__slider Skillcontainer__slider3'>
               <LinearProgress variant="determinate" value={95}/>
           </div>
       </div>
       
       <div className='Skillcontainer__skillset'>
           <h5>JS</h5>
           <div className='Skillcontainer__slider Skillcontainer__slider4'>
               <LinearProgress variant="determinate" value={85}/>
           </div>
       </div>
       
       <div className='Skillcontainer__skillset'>
           <h5>REACT</h5>
           <div className='Skillcontainer__slider Skillcontainer__slider5'>
               <LinearProgress variant="determinate" value={60}/>
           </div>
       </div>

       </div>
    </Element>
  )
}
export default Skillcontainer