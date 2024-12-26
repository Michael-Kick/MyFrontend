import React from "react";
import NavLink from "./NavLink";

interface Props {
    links?: NavbarProps[];
}

const MenuOverlay = ({ links }: {links:NavbarProps[]}) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link: { path: string; title: string; }, index: number ) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;