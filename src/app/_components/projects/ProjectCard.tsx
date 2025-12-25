import React from 'react';
import SkillTag from "./SkillTag";
import Image from "next/image";


interface ProjectCardProps {
    project: ProjectObject
}

interface ProjectObject {
    projectName: string,
    activity: string,
    icon: string,
    imgUrl: string,
    companyName: string,
    description: string,
    projectSkills: number[]
}


const ProjectCard = (props: ProjectCardProps) => {

    return (
        <div className="flex flex-col max-w-sm m-12 p-6 border bg-contrast border-border rounded-lg shadow-sm transition-colors hover:bg-contrastDark">
            <div className="grid grid-cols-[70%_30%] items-center gap-4">
                <h3 className="mb-2 text-2xl font-bold">{props.project.projectName}</h3>
                <div>
                    <Image
                        src={props.project.imgUrl}
                        alt=""
                        width={120}
                        height={90}
                    />
                </div>
            </div>
            <div className="mb-2 font-bold">{props.project.companyName}</div>
            <p className="mb-4 text-secondary">{props.project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {props.project.projectSkills.map((skillNum: number, index) =>
                    <SkillTag skillKey={skillNum} key={index}/>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
