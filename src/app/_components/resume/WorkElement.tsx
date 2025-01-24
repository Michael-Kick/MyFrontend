import React from 'react';
import SkillTag from "../projects/SkillTag";


interface WorkElementProps {
    resumeElement: WorkElementObject
}

interface WorkElementObject {
    companyName : string,
    activity: string,
    description : string,
    start_date : Date,
    end_date : Date,
    country : string,
    city : string,
    skills: number[]
}


function WorkElement(props:WorkElementProps) {
    return (
        <div className="hover:bg-contrast">
            <div><strong>{props.resumeElement.companyName}</strong>
                <br/>
                {props.resumeElement.activity}
                <br/>
                {props.resumeElement.description}
                <br/>
                {props.resumeElement.start_date.toDateString()} -
                {props.resumeElement.end_date.toDateString()}
                <br/>
                {props.resumeElement.country}
                <br/>
                {props.resumeElement.city}
                <br/>
                <div className="flex space-x-2 overflow-x-auto">
                    {props.resumeElement.skills.map((skillNum: number,id:number) =>
                        <SkillTag skillKey={skillNum} key={id}/>
                    )}
                </div>

            </div>
        </div>
    );
}

export default WorkElement;