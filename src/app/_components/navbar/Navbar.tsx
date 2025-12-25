"use client";

import { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/resume", label: "Resume"},
        {href: "/about", label: "About"},
        {href: "/settings", label: "Settings"},
    ];

    return (
        <div className="bg-background border-b border-border">
            <nav className="w-full z-50 top-0 px-4 md:px-6 max-w-screen-2xl m-auto text-text flex justify-between items-center h-16 md:h-20">
                {/* Logo */}
                <div className="flex text-lg">
                    <NavLink href="/" label="MyBrand"/>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-text hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex text-lg">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            label={link.label}/>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="flex flex-col px-4 py-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="py-3 text-text hover:text-primary transition-colors border-b border-border last:border-b-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
