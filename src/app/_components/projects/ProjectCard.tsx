import React from 'react';
import SkillTag from "./SkillTag";
import Image from "next/image";


interface ProjectCardProps {
    project: ProjectObject
}

interface ProjectObject {
    projectName : string,
    activity: string,
    icon:string,
    imgUrl:string,
    companyName : string,
    companyLogo : string,
    description : string,
    projectSkills : number[]
}


const ProjectCard = (props:ProjectCardProps) => {

    return (
        <div className="relative flex flex-col my-6 bg-contrastDark shadow-sm border border-slate-200 rounded-lg w-96">
            <div>
                icon
            </div>
            <h3>{props.project.projectName}</h3>
            <div className="absolute top-4 right-4 flex space-x-2">
                <Image
                    src={props.project.imgUrl}
                    alt=""
                    width={120}
                    height={90}
                />
            </div>
            <div>{props.project.companyName}</div>
            <div>{props.project.companyLogo}</div>
            <div>{props.project.description}</div>
            <div className="flex space-x-2 overflow-x-auto">
                {props.project.projectSkills.map((skillNum: number) =>
                    <SkillTag skillKey={skillNum}/>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;