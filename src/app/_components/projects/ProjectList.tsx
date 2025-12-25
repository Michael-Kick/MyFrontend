import React from 'react';
import ProjectCard from "./ProjectCard";


const projects = [
    {
        projectName : 'Milage 2+ Design Revision',
        activity: 'Mobile/Frontend Development',
        imgUrl:'/images/ualg.png',
        icon:'',
        companyName : 'Universidade do Algarve',
        description : 'Redesigned and improved the mobile learning app UI/UX',
        projectSkills : [2,1]
    },
    {
        projectName : 'Cockpittool Mobile',
        activity: 'Mobile Development',
        imgUrl:'/images/Siemens-logo.png',
        icon:'',
        companyName : 'Siemens AG',
        description : 'Built mobile dashboard for project management tracking',
        projectSkills : [6,8]
    },
    {
        projectName : 'Chatbot Customer Support',
        activity: 'AI Development',
        imgUrl:'/images/insys icom.png',
        icon:'',
        companyName : 'Insys Icom',
        description : 'Developed AI-powered customer support chatbot',
        projectSkills : [5,9]
    },
    {
        projectName : 'Privacysoft',
        activity: 'Backend Development',
        imgUrl:'/images/logo_p29.webp',
        icon:'',
        companyName : 'Projekt 29 GmbH & Co. KG',
        description : 'Built backend services for privacy compliance software',
        projectSkills : [7,3,10]
    },
]


function ProjectList() {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project,id) =>
                <ProjectCard key={id} project={project}/>)}
        </div>
    );
}

export default ProjectList;