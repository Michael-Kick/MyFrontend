import React from 'react';
import ProjectCard from "./ProjectCard";



const projects = [
    {
        projectName : 'Milage 2+ Design Revision',
        companyName : 'Universidade do Algarve',
        companyLogo : '',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [1,2]
    },
    {
        projectName : 'Milage 2+ Design Revision',
        companyName : 'Universidade do Algarve',
        companyLogo : '',
        description : 'Erstellen der Lernapp dies und das',
        projectSkills : [1,2]
    }
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