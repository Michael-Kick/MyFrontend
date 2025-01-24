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
        <div>
            <div><strong>{props.educationElement.academicTitle}</strong>
                <br/>
                {props.educationElement.university}
                <br/>
                {props.educationElement.thesisTitle}
                <br/>
                {props.educationElement.start_date.toDateString()} -
                {props.educationElement.end_date.toDateString()}
                <br/>
                {props.educationElement.country}
                <br/>
                {props.educationElement.city}
                <br/>
                <div className="flex space-x-2">
                    {props.educationElement.skills.map((skillNum: number, id: number) =>
                        <SkillTag skillKey={skillNum} key={id}/>
                    )}
                </div>

            </div>
        </div>
    );
}

export default EducationElement;