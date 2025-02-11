import {Details} from "./Details";
import resumeObj from "./resume/workExperience";
import React from "react";


export const Experience = () => {
    return (
        <div>
            <h1 className='font-bold text-6xl mb-32 w-full text-center'>Work Experience</h1>
            <div className="w-[80%] mx-auto relative">
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
