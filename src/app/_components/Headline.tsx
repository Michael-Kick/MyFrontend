import React from 'react';

interface HeadlineProps{
    text: string,
}

function Headline({text}:HeadlineProps) {
    return (
        <h1 className="text-7xl font-bold flex justify-start mb-12">{text}</h1>
    );
}

export default Headline;