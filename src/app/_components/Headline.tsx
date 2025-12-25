import React from 'react';

interface HeadlineProps{
    text: string,
}

function Headline({text}:HeadlineProps) {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold flex justify-start mb-6 md:mb-12">{text}</h1>
    );
}

export default Headline;