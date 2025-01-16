"use client";
import React from 'react';
import {FaJava, FaPython, FaReact, FaVuejs} from "react-icons/fa";
import {TbBrandCSharp, TbBrandXamarin} from "react-icons/tb";
import {BsFiletypeSql} from "react-icons/bs";
import {BiLogoTypescript} from "react-icons/bi";
import { SiLangchain,SiSpringboot,SiSap  } from "react-icons/si";

// Icon source:
// https://react-icons.github.io/react-icons/

type SkillTagProps = {
    skillKey: number;
}
const mySkills = [
    {key: 1, name: 'Vue.js', icon: <FaVuejs/>, textColor:'#31475e', backgroundColor:'#3fb984'},
    {key: 2, name: 'TypeScript', icon: <BiLogoTypescript/>, textColor:'#ffffff', backgroundColor:'#2d79c7'},
    {key: 3, name: 'SQL', icon: <BsFiletypeSql/>, textColor:'#ffffff', backgroundColor:'#087993'},
    {key: 4, name: 'React.js', icon: <FaReact/>, textColor:'#00d8ff', backgroundColor:'#222222'},
    {key: 5, name: 'Python', icon: <FaPython/>, textColor:'#f7cd38', backgroundColor:'#646464'},
    {key: 6, name: 'C-Sharp', icon: <TbBrandCSharp/>, textColor:'#ffffff', backgroundColor:'#690081'},
    {key: 7, name: 'Java', icon: <FaJava/>, textColor:'#f58620', backgroundColor:'#547c99'},
    {key: 8, name: 'Xamarin.Forms', icon: <TbBrandXamarin/>, textColor:'#ffffff', backgroundColor:'#3a9bdc'},
    {key: 9, name: 'LangChain', icon: <SiLangchain/>, textColor:'#ffffff', backgroundColor:'#1c3c3c'},
    {key: 10, name: 'Spring boot', icon: <SiSpringboot/>, textColor:'#ffffff', backgroundColor:'#6db33f'},
    {key: 11, name: 'ABAP', icon: <SiSap />, textColor:'#ffffff', backgroundColor:'#00a4ea'},
]


function SkillTag(props: SkillTagProps) {

    // const [count, setCount] = useState(0);
    const skill = mySkills.find((el) => el.key == props.skillKey);
    return (
        <div style={{backgroundColor:skill?.backgroundColor}}
             className="border border-contrast rounded-2xl flex justify-center w-fit bg-">
            <div className="flex h-auto items-center mt-0.5 mb-0.5 ms-3 me-1">
                {skill?.icon}
            </div>
            <div style={{color:skill?.textColor}} className="mt-0.5 mb-0.5 ms-1 me-3">{skill?.name}</div>
        </div>
    );
}

export default SkillTag;