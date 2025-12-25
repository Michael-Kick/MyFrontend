import React, { EventHandler } from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    download?: boolean;
}

function CustomizedButton({text,onClick, href, download}:ButtonProps) {

    const className = "px-8 py-4 text-lg font-medium text-center text-onPrimary bg-primary rounded-md transition-colors hover:bg-primaryHover";

    if (href) {
        return (
            <a
                href={href}
                className={className}
                download={download}
            >
                {text}
            </a>
        );
    }

    return (
        <button className={className}
                onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomizedButton;
