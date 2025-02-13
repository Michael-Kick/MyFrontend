import {Details} from "./Details";
import resumeObj from "./resume/workExperience";
import React from "react";


export const Experience = () => {
    return (
        <div>
            <h1 className='font-bold text-8xl mb-32 w-full pl-[28%]'>Work Experience</h1>
            <div className="w-[75%] mx-auto relative">
                <div className="absolute left-9 top-1 w-[4px] h-full bg-text origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    {resumeObj.work_exp.map((exp, id: number) =>
                        <Details key={id} resumeElement={exp}/>
                    )}
                </ul>
            </div>
            
        </div>
    );
}
