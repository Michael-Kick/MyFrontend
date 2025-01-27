import React from 'react';

interface ButtonProps {
    text: string;
    onClick: ()=> void;
}



function CustomizedButton({onClick,text}:ButtonProps) {
    return (
        <button className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row text-white bg-indigo-600 rounded-md px-4 py-2 hover:bg-indigo-700 transition-all duration-300"
                onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomizedButton;