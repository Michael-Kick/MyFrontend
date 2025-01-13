import React from 'react';
import SkillTag from "./SkillTag";

interface ProjectCardProps {
    project: ProjectObject
}

interface ProjectObject {
    projectName : string,
    companyName : string,
    companyLogo : string,
    description : string,
    projectSkills : number[]
}


const ProjectCard = (props:ProjectCardProps) => {

    console.log(props.project)

    return (
        <div>
            <h3>{props.project.projectName}</h3>
            <div>{props.project.companyName}</div>
            <div>{props.project.companyLogo}</div>
            <div>{props.project.description}</div>
            <div>
                {props.project.projectSkills.map((skillNum: number) =>
                    <SkillTag skillKey={skillNum}/>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;