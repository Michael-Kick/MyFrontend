import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({href, title}: NavLinkProps) => {
    return (
        <Link
            href={href}
        >
            {title}
        </Link>
    );
};

export default NavLink;