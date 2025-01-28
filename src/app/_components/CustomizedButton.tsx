"use client";
import React from 'react';
import { useRouter } from "next/navigation";

interface ButtonProps {
    text: string;
    functionIndex: number;
    href?: string;
}

function CustomizedButton({functionIndex,text,href}:ButtonProps) {
    const router = useRouter();


    const onClickFunctions = [
        () => {
            if (href != null) {
                router.push(href)
            }}
    ]


    return (
        <button className="px-8 py-4 text-lg font-medium text-center text-text bg-primary rounded-md"
                onClick={onClickFunctions[functionIndex]}>
            {text}
        </button>
    );
}

export default CustomizedButton;