import React  from 'react'
import { Element } from 'react-scroll/modules'
import Project from '../Project/Project'
import './Projectcontainer.css'


const Projectcontainer = () => {
  
  const projects = [
    {
      img:"https://vanimg.s3.amazonaws.com/screens-8.jpg",
      title:"Acosmin.com",
      desc:"It is a elegent themed website which has collection of themes",
      link:"www.google.com"
    },
    {
      img:"https://vanimg.s3.amazonaws.com/screens-1.jpg",
      title:"Shopify",
      desc:"Here you can shop everything u want..",
      link:"www.google.com"
    },
    {
      img:"https://vanimg.s3.amazonaws.com/screens-2.jpg",
      title:"Hifi",
      desc:"It is made for marketers!!",
      link:"www.google.com"
    },
    {
      img:"https://vanimg.s3.amazonaws.com/screens-3.jpg",
      title:"WPZOOM",
      desc:"We provide top quality permium WordPress themes at amazing prizes!",
      link:"www.google.com"
    },
    {
      img:"https://vanimg.s3.amazonaws.com/screens-4.jpg",
      title:"PODIO",
      desc:"For the first time you create your own work tools",
      link:"www.google.com"
    },
    {
      img:"https://vanimg.s3.amazonaws.com/screens-7.jpg",
      title:"THEMESHIFT",
      desc:"Quality themes,Theme translations,Easy Customization..",
      link:"www.google.com"
    },
  ]
  
  
  return (   
    <Element id="projects" className="projectcontainer">
         <h1>PROJECTS</h1>
         <p>Projects that i have done for my clients.</p>
         <div className='projectcontainer__projects'>
         {
           projects.map((project,index)=>{
             return(
               <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}></Project>
             )
           })
         }
         </div>   
    </Element>
  )
}

export default Projectcontainer