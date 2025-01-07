import React from "react";
import './_ui/globals.css'
import Navbar from "./_components/Navbar";


export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body className="bg-background text-text flex flex-col min-h-screen">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navbar/>
        <main className="flex-grow">{children}</main>
        </body>
        </html>
    );
}
