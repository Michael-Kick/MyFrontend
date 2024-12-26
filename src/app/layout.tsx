import React from "react";
import Navbar from "./_components/Navbar";
import './_ui/globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
        </body>
        </html>
    );
}
