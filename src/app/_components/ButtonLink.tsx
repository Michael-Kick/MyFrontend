import React from 'react';
import Link from "next/link";

interface ButtonLinkProps {
    text: string;
    href: string;
    download?: boolean;
    prefetch?: boolean;
}

const buttonClassName =
    "px-8 py-4 text-lg font-medium text-center text-onPrimary bg-primary rounded-md transition-colors hover:bg-primaryHover";

function ButtonLink({ text, href, download, prefetch = false }: ButtonLinkProps) {
    const isExternal = href.startsWith('http');

    if (download || isExternal) {
        return (
            <a href={href} download={download} className={buttonClassName}>
                {text}
            </a>
        );
    }

    return (
        <Link href={href} className={buttonClassName} prefetch={prefetch}>
            {text}
        </Link>
    );
}

export default ButtonLink;
