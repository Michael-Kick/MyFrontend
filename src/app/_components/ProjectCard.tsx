import React from 'react';
import SkillTag from "./SkillTag";

const ProjectCard = () => {
    console.log("(1)")
    const projSkills: number[] = [1,2,3,4,5,6,7,8]
    return (
        <div>
            <h3> Project Name</h3>
            <div>COMPANY ICON</div>
            <div>Company name and Department</div>
            <div>
                {projSkills.map((skillNum: number) =>
                    <SkillTag skillKey={skillNum}/>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;