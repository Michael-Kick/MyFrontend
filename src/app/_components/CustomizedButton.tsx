"use client";
import React from 'react';

interface ButtonProps {
    text: string;
    functionIndex: number;
}

const onClickFunctions = [
    () => {alert("i was clicked!");},
    () => {console.log("now The other button was clicked");}
]


function CustomizedButton({functionIndex,text}:ButtonProps) {
    return (
        <button className="px-8 py-4 text-lg font-medium text-center text-text bg-primary rounded-md"
                onClick={onClickFunctions[functionIndex]}>
            {text}
        </button>
    );
}

export default CustomizedButton;