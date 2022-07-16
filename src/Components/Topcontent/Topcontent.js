import React from 'react'
import {Link} from 'react-scroll'
import './Topcontent.css'

const Topcontent = () => {
  return (
    <div className='topcontent'>
     <div className='topcontent__container'>
       <h1>Mr.Deepak</h1>
       <p>A Professional Frontend Developer!!</p> 
       <a href='#'>
           <button className='topcontent__downloadbutton'>Download CV</button>
       </a>
       <Link to="projects" smooth={true} duration={500}>
           <button className='topcontent__workbutton'>My Work</button>
       </Link>
     </div>
    </div>
  )
}

export default Topcontent
