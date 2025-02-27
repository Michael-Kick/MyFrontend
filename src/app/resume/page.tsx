import React from 'react';
import {ResumeElement} from '../_components/ResumeElement';
import resumeObj from "../_components/resume/workExperience";


function Resume() {
    return (
        <div className="w-full">
            <ResumeElement heading="Work Experience" workElement={resumeObj.work_exp}/>
            <ResumeElement heading="Education" educationElement={resumeObj.education}/>
        </div>
    );
}

export default Resume;