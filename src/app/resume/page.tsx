import React from 'react';
import ResumeList from "../_components/resume/ResumeList";
import Headline from "../_components/Headline";
import { Experience } from '../_components/Experience';

function Resume() {
    return (
        <div className="w-full">
            <Experience/>
        </div>
    );
}

export default Resume;