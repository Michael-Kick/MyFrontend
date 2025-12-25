"use client";
import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomizedButton from "./CustomizedButton";


function Hero() {

    const router = useRouter();

    const heroTitle: string = "Hello \nmy name's Michael.";


    const contactClicked = () => {
        router.push("/contact")
    }

    return (
        <div className="flex flex-wrap ">
            <div className="flex items-center w-full lg:w-1/2">
                <div className="max-w-2xl mb-8">
                    <p>Welcome to my portfolio!</p>
                    <h1 className="text-5xl font-bold leading-snug tracking-tight text-text lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight whitespace-pre-wrap">
                        {heroTitle}
                    </h1>
                    <div
                        className="py-5 text-xl leading-normal text-secondary lg:text-xl xl:text-2xl whitespace-pre-line">
                        I am a Software Engineer from Regensburg.
                        Currently i am working for TGW as a Java Software Developer.
                    </div>
                    <div
                        className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                    </div>
                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row" >
                        <CustomizedButton text="Contact Me" onClick={contactClicked} />
                        <CustomizedButton text="Download CV" href="/resume"/>
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
