"use client";
import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    download?: boolean;
    disabled?: boolean;
}

function CustomizedButton({text,onClick, href, download, disabled}:ButtonProps) {

    const className = `px-8 py-4 text-lg font-medium text-center text-onPrimary bg-primary rounded-md transition-colors hover:bg-primaryHover ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

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
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    );
}

export default CustomizedButton;
