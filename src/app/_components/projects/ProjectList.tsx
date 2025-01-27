import React from 'react';
import ProjectCard from "./ProjectCard";


const projects = [
    {
        projectName : 'Milage 2+ Design Revision',
        activity: 'Mobile/Frontend Development',
        imgUrl:'/images/ualg.png',
        icon:'',
        companyName : 'Universidade do Algarve',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [2,1]
    },
    {
        projectName : 'Cockpittool Mobile',
        activity: 'Mobile Development',
        imgUrl:'/images/Siemens-logo.png',
        icon:'',
        companyName : 'Siemens AG',
        description : 'Do stuff for project managers',
        projectSkills : [6,8]
    },
    {
        projectName : 'Chatbot Customer Support',
        activity: 'AI Developement',
        imgUrl:'/images/insys icom.png',
        icon:'',
        companyName : 'Insys Icom',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [5,9]
    },
    {
        projectName : 'Privacysoft',
        activity: 'Backend Development',
        imgUrl:'/images/logo_p29.webp',
        icon:'',
        companyName : 'Projekt 29 GmbH & Co. KG',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [7,3,10]
    },
]


function ProjectList() {


    return (
        <div className="flex">
            {projects.map((project,id) =>
                <ProjectCard key={id} project={project}/>)}
        </div>
    );
}

export default ProjectList;