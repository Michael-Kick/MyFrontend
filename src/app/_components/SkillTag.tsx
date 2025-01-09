"use client";
import React from 'react';
import { FaVuejs, FaReact, FaPython, FaJava} from "react-icons/fa";
import {TbBrandCSharp, TbBrandXamarin} from "react-icons/tb";
import {BsFiletypeSql} from "react-icons/bs";
import {BiLogoTypescript} from "react-icons/bi";

type SkillTagProps = {
    skillKey: number;
}
const mySkills = [
    {key: 1, name: 'Vue.js', icon: <FaVuejs/>},
    {key: 2, name: 'TypeScript', icon: <BiLogoTypescript/>},
    {key: 3, name: 'SQL', icon: <BsFiletypeSql/>},
    {key: 4, name: 'React.js', icon: <FaReact/>},
    {key: 5, name: 'Python', icon: <FaPython/>},
    {key: 6, name: 'C#', icon: <TbBrandCSharp/>},
    {key: 7, name: 'Java', icon: <FaJava/>},
    {key: 8, name: 'Xamarin.Forms', icon: <TbBrandXamarin/>},
]

function SkillTag(props:SkillTagProps){

    // const [count, setCount] = useState(0);
    const skill = mySkills.find((el) => el.key == props.skillKey);
    return (
        <div>
            <p>{skill.name}</p>
            {skill.icon}
        </div>
    );
}

export default SkillTag;