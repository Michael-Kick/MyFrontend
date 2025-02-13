import React from "react";
import './_ui/globals.css'
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/Footer";


export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en">
        <body className="bg-background font-montserrat text-text text-base flex flex-col min-h-screen">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navbar/>
        <main className="flex flex-grow w-full pl-32 pr-32 mx-auto pt-16 pb-16 justify-center">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
