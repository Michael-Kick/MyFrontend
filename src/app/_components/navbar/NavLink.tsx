import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link href={href} className="flex items-center justify-center px-6 text-text transition-colors hover:bg-contrastDark hover:text-primary">
            {label}
        </Link>
    );
}

export default NavLink;
