import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link
            href={href}
            prefetch={false}
            className="flex h-full items-center justify-center border-b border-transparent px-6 text-text transition-colors hover:border-primary hover:text-primary">
            {label}
        </Link>
    );
}

export default NavLink;
