import React from 'react';
import Image from "next/image";
import CustomizedButton from "./CustomizedButton";

function Hero() {

    const heroTitle: string = "Hello \nmy name's Michael.";


    return (
        <div className="flex flex-wrap ">
            <div className="flex items-center w-full lg:w-1/2">
                <div className="max-w-2xl mb-8">
                    <p>Welcome to my portfolio!</p>
                    <h1 className="text-5xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white whitespace-pre-wrap">
                        {heroTitle}
                    </h1>
                    <div
                        className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 whitespace-pre-line">
                        I am a Software Engineer from Regensburg.
                        Currently i am working for TGW as a Java Software Developer.
                    </div>
                    <div
                        className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                    </div>
                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row" >
                        <CustomizedButton text="Contact Me" functionIndex={0}/>
                        <CustomizedButton text="Download CV" functionIndex={1}/>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <div>
                    <Image
                        src='/images/developer-icon.png'
                        width="1000"
                        height="1000"
                        className={"object-cover"}
                        alt="Hero Illustration"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;