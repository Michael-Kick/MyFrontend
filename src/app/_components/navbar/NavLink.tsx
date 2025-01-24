import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link href={href} className="flex items-center justify-center text-text hover:bg-contrastDark px-6">
            {label}
        </Link>
    );
}

export default NavLink;