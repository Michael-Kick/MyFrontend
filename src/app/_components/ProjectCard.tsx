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

    return (
        <div className="relative flex flex-col my-6 bg-gray-600 shadow-sm border border-slate-200 rounded-lg w-96">
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