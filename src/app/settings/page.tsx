"use client";
import React from 'react';


const themes = ["light", "dark", "purple", "blue"];
const changeTheme = (theme: string) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
}

function Settings() {
    return (
        <div>

            <div className="flex gap-4">
                {themes.map((theme) => (
                    <div className="cursor-pointer" key={theme} onClick={() => changeTheme(theme)}>
                        {theme}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Settings;