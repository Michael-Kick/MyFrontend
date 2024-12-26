import React from "react";
import NavLink from "./NavLink";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Resume',
        path: '/resume'
    }
];

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;