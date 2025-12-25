import {WorkDetails} from "./WorkDetails";
import {IEducationDetail, IWorkDetail} from "./resume/workExperience"
import React from "react";
import {EducationDetails} from "./EducationDetails";

interface ResumeElementProps {
    heading: string,
    workElement?: IWorkDetail[],
    educationElement?: IEducationDetail[],
}


export const ResumeElement = (props: ResumeElementProps) => {
    return (
        <div className="mb-32">
            <h1 className='font-bold text-8xl mb-16 w-full pl-[28%]'>{props.heading}</h1>
            <div className="w-[75%] mx-auto relative">
                <div className="absolute left-9 top-1 w-[4px] h-full bg-border origin-top"/>
                {props.workElement &&
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        {props.workElement.map((exp, id: number) =>
                            <WorkDetails key={id} resumeElement={exp}/>
                        )}
                    </ul>
                }
                {props.educationElement &&
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        {props.educationElement.map((edu, id: number) =>
                            <EducationDetails key={id} eduElement={edu}/>
                        )}
                    </ul>
                }

            </div>

        </div>
    );
}
