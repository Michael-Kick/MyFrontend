import React from "react";
import './_ui/globals.css'
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/Footer";


export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body className="bg-background text-text flex flex-col min-h-screen">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navbar/>
        <main className="flex flex-grow w-full max-w-screen-2xl mx-auto">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
