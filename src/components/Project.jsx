import React from 'react'
import INFO from './myInfo';
import "./Project.css"
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div id='projects' className='projSec'>
        <div className="redun1"></div>
        <h2>{INFO.projectsec.title}</h2>
        <p>{INFO.projectsec.description}</p>
        <div className="projCont"> 
        {INFO.projectsec.projects.map((project, index)=>{
            return (
                <div className="project" key={index}>
                    <img src={project.image}alt="project-pic" />
                    <h3>{project.title} <span></span></h3>
                    <p className='projSkill'>{project.skills}</p>
                    <p>{project.description}</p>
                    <a href={project.link} target='blank'>GITHUB <FaGithub /></a>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Project