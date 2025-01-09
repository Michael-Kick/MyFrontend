import React from 'react';
import SkillTag from "./SkillTag";

const ProjectCard = () => {
    console.log("(1)")
    const projSkills = [1,2,3,4,5,6,7,8]
    return (
        <div>
            <div> Project Overview</div>
            <div>
                {projSkills.map((skillNum) =>
                    <SkillTag skillKey={skillNum}/>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;