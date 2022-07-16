import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll/modules'
import {Facebook,Instagram,LinkedIn,Google} from '@mui/icons-material'
import './Contact.css'
const Contact = () => {
  return (
    
    <Element id="contact" className='contact'>
     <h1>CONTACT</h1>
     <div className='contact__container'>
         <p>
             Email: <span>deepakvel82@gmail.com</span>

         </p>
         <p>
             Mobile: <span>+91 7397706858</span>
         </p>
         <p>

             Github Username: <span>Deepakwings</span>
         </p>
        
    <div className='contact__icons'>
     <a href='#'>
         <IconButton>
             <Instagram/>
         </IconButton>
     </a>
     <a href='#'>
         <IconButton>
             <Facebook/>
         </IconButton>
     </a>
     <a href='#'>
         <IconButton>
             <LinkedIn/>
         </IconButton>
     </a>
     <a href='#'>
         <IconButton>
             <Google/>
         </IconButton>
     </a>

    </div>
    </div>
    </Element>

  )
}

export default Contact