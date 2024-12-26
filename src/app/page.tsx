"use client";
import HeroSection from "./_components/HeroSection";
import {useState} from "react";

// rsf

const themes = [ "black", "purple", "blue"];


export default function Home() {
    const [theme, setTheme] = useState<string>(themes[0]);
    return(
    <main className={`theme-${theme}`}>
        <div>
            <h3 className="font-semibold">Select Theme: </h3>
            <div className="flex gap-4">
                {themes.map((theme) => (
                    <div className="cursor-pointer" key={theme} onClick={() => setTheme(theme)} >
                        {theme}
                    </div>
                ))}
            </div>
        </div>
        <HeroSection/>
    </main>)
}