import React from "react";
import './_ui/globals.css'
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/Footer";
import Providers from "./providers";


export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-background font-montserrat text-text text-base flex flex-col min-h-screen transition-colors duration-200">
        <Providers>
            {/* Layout UI */}
            {/* Place children where you want to render a page or nested layout */}
            <Navbar/>
            <main className="flex flex-grow w-full px-4 sm:px-8 md:px-16 lg:px-32 mx-auto pt-8 md:pt-16 pb-8 md:pb-16 justify-center">{children}</main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
