import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link href={href} className="text-text hover:text-primary">
            {label}
        </Link>
    );
}

export default NavLink;