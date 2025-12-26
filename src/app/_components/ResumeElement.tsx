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
        <div className="mb-16 md:mb-32">
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-16 w-full text-center md:text-left md:pl-[15%]'>{props.heading}</h1>
            <div className="w-full md:w-[90%] lg:w-[80%] mx-auto relative">
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
