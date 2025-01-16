import React from 'react';
import ProjectCard from "./ProjectCard";


const projects = [
    {
        projectName : 'Milage 2+ Design Revision',
        imgUrl:'/images/ualg.png',
        icon:'',
        companyName : 'Universidade do Algarve',
        companyLogo : '',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [2,1]
    },
    {
        projectName : 'Cockpittool Mobile',
        imgUrl:'/images/Siemens-logo.svg.png',
        icon:'',
        companyName : 'Siemens AG',
        companyLogo : '',
        description : 'Do stuff for project managers',
        projectSkills : [6,8]
    },
    {
        projectName : 'Chatbot Customer Support',
        imgUrl:'/images/insys icom.png',
        icon:'',
        companyName : 'Insys Icom',
        companyLogo : '',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [5,9]
    },
    {
        projectName : 'Backend Development',
        imgUrl:'/images/logo_p29.webp',
        icon:'',
        companyName : 'Universidade do Algarve',
        companyLogo : '',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [7,3,10]
    },
]


function ProjectList() {


    return (
        <div>
            {projects.map((project,id) =>
                <ProjectCard key={id} project={project}/>)}
        </div>
    );
}

export default ProjectList;