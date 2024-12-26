"use client";
import HeroSection from "./_components/HeroSection";

// rsf

const themes = [ "light", "dark", "purple", "blue"];
const changeTheme = (theme:string) => {
    document.querySelector("html")?.setAttribute("data-theme",theme);
}

export default function Home() {
    return(
    <main>
        <div>
            <h3 className="font-semibold">Select Theme: </h3>
            <div className="flex gap-4">
                {themes.map((theme) => (
                    <div className="cursor-pointer" key={theme} onClick={() => changeTheme(theme)} >
                        {theme}
                    </div>
                ))}
            </div>
        </div>
        <HeroSection/>
    </main>)
}