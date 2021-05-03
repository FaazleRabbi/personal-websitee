import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsInfo } from '../ProjectsInfo/ProjectsInfo';



const Project = () => {
    console.log(projectsInfo)
    return (
      
        <div className="headerMain pt-1">
            <Navbar></Navbar>
            <h3 className="text-warning text-center">PROJECTS</h3>
            <p className=" text-center text-light">With my learning part I have done some lots of project. There are some favorite project among of them.</p>
            <div className='row p-3 w-100'>
            {
                projectsInfo.map(info =><ProjectCard key={info.id} info={info}></ProjectCard>)
            }
            </div>
        </div>
    );
};

export default Project;