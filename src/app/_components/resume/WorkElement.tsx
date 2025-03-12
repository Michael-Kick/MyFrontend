import React from 'react';
import SkillTag from "../projects/SkillTag";
import { IWorkDetail } from './workExperience';


interface WorkElementProps {
    resumeElement: IWorkDetail
}

function WorkElement(props: WorkElementProps) {
    return (
        <div className="hover:bg-contrastDark mb-10">
            <h3 className="mb-2 text-2xl font-bold">{props.resumeElement.companyName}</h3>
            <div className="mb-2 font-bold">{props.resumeElement.projectName}</div>
            <div className="mb-2">{props.resumeElement.activity}</div>
            <div className="mb-4">{props.resumeElement.description}</div>
            <div>
                {props.resumeElement.start_date.toDateString()} -
                {props.resumeElement.end_date.toDateString()}
            </div>
            <div className="mb-4">
                {props.resumeElement.country}, {props.resumeElement.city}
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
                {props.resumeElement.skills.map((skillNum: number, id: number) =>
                    <SkillTag skillKey={skillNum} key={id}/>
                )}
            </div>


        </div>
    );
}

export default WorkElement;