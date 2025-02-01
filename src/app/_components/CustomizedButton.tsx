import React, { EventHandler } from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

function CustomizedButton({text,onClick}:ButtonProps) {

    return (
        <button className="px-8 py-4 text-lg font-medium text-center text-text bg-primary rounded-md"
                onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomizedButton;