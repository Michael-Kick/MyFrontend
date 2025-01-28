import React from 'react';
import SkillTag from "../projects/SkillTag";



interface EducationElementProps{
    educationElement: EducationElementObject
}

interface EducationElementObject {
    academicTitle: string,
    university: string,
    thesisTitle: string,
    description: string,
    start_date : Date,
    end_date : Date,
    country : string,
    city : string,
    skills: number[]
}

function EducationElement(props:EducationElementProps) {
    return (
        <div className='hover:bg-contrastDark mb-10'>
            <div>
                <h3 className="mb-2 text-2xl font-bold whitespace-pre-wrap">{props.educationElement.academicTitle}</h3>
                <div className="mb-2 font-bold">{props.educationElement.university}</div>
                <div className="mb-4">
                    {props.educationElement.thesisTitle}
                </div>
                <div>
                    {props.educationElement.start_date.toDateString()} -
                    {props.educationElement.end_date.toDateString()}
                </div>
                <div className="mb-4">
                    {props.educationElement.country}, {props.educationElement.city}
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                    {props.educationElement.skills.map((skillNum: number, id: number) =>
                        <SkillTag skillKey={skillNum} key={id}/>
                    )}
                </div>

            </div>
        </div>
    );
}

export default EducationElement;